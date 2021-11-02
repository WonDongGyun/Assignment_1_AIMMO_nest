import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Boards } from "../entities/boards.entity";
import { CategoryCode } from "../entities/categoryCode.entity";
import { Users } from "../entities/users.entity";
import { UpdatePostDto } from "./dto/updatePost.dto";
import { WriteDto } from "./dto/write.dto";
import { BoardVerifyException } from "./exception/BoardVerifyException";
import { NotFoundBoardException } from "./exception/NotFoundBoardException";
import { NotFoundCategoryException } from "./exception/NotFoundCategoryException";
import { NotFoundUserException } from "./exception/NotFoundUserException";

@Injectable()
export class BoardService {
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,

		@InjectRepository(Boards)
		private boardsRepository: Repository<Boards>,

		@InjectRepository(CategoryCode)
		private categoryCodeRepository: Repository<CategoryCode>,

		private jwtService: JwtService
	) {}

	// 사용자가 작성한 게시판 확인
	private async boardVerify(boardId: number, loginUser) {
		const findBoard: Boards = await this.boardsRepository.findOne({
			boardId: boardId
		});

		const findUser: Users = await this.usersRepository.findOne({
			userId: loginUser.userId
		});

		if (!findBoard) {
			throw new NotFoundBoardException();
		}

		if (!findUser) {
			throw new NotFoundUserException();
		}

		if (findBoard.userId != findUser.userId) {
			throw new BoardVerifyException();
		}

		return findBoard;
	}

	// mongoDB는 increment 기능이 없기 때문에 구현
	private async incrementBoardId() {
		const board = await this.boardsRepository.findOne({
			order: {
				boardId: "DESC"
			}
		});

		return !board ? 1 : board.boardId + 1;
	}

	// typeorm count는 mongoDB에서 작동을 하지 않기 때문에 조회수를 구하기 위해 구현
	private readCount(board: Boards) {
		const count = board.readUser ? Object.keys(board.readUser).length : 0;
		board["readCount"] = count;
		return board;
	}

	// 게시글 생성
	async createPost(loginUser, writeDto: WriteDto) {
		const findUser = await this.usersRepository.findOne({
			userId: loginUser.userId
		});

		if (!findUser) {
			throw new NotFoundBoardException();
		}

		const findCategory = await this.categoryCodeRepository.findOne({
			categoryCode: writeDto.categoryCode
		});

		if (!findCategory) {
			throw new NotFoundCategoryException();
		}

		const board: Boards = new Boards();
		board.title = writeDto.title;
		board.contents = writeDto.contents;
		board.categoryCode = writeDto.categoryCode;
		board.userId = findUser.userId;
		board.boardId = await this.incrementBoardId();

		return await this.boardsRepository.save(board);
	}

	// 게시글 수정
	async updatePost(boardId: number, loginUser, updatePostDto: UpdatePostDto) {
		const findCategory = await this.categoryCodeRepository.findOne({
			categoryCode: updatePostDto.categoryCode
		});

		if (!findCategory) {
			throw new NotFoundCategoryException();
		}

		const board = await this.boardVerify(boardId, loginUser);

		board.title = updatePostDto.title;
		board.contents = updatePostDto.contents;
		board.categoryCode = updatePostDto.categoryCode;
		return await this.boardsRepository.save(board);
	}

	// 게시글 삭제
	async deletePost(boardId: number, loginUser) {
		const board = await this.boardVerify(boardId, loginUser);
		await this.boardsRepository.delete({ boardId: board.boardId });
		return null;
	}

	// 게시글 내용 가져오기
	// 만약 토큰이 존재하는 경우 readUser값을 비교하여 readUser에 추가
	async readPost(token: string, boardId: number) {
		const board: Boards = await this.boardsRepository.findOne({
			boardId: boardId
		});

		if (token) {
			const decoded = this.jwtService.decode(token);
			const findUser: Users = await this.usersRepository.findOne({
				userId: decoded["userId"]
			});

			if (!findUser) {
				throw new NotFoundBoardException();
			}

			if (
				(board.readUser &&
					!board.readUser.hasOwnProperty(`${findUser.userId}`)) ||
				!board.readUser
			) {
				!board.readUser
					? (board.readUser = new Object())
					: board.readUser;
				board.readUser[findUser.userId] = true;
				await this.boardsRepository.save(board);
			}
		}

		return this.readCount(board);
	}

	// 게시글 목록 가져오기
	async getPage(page: number) {
		const take = 10;
		const skip = page * 10 || 0;
		const [pageBoard, total] = await this.boardsRepository.findAndCount({
			order: {
				boardId: "DESC"
			},
			take: take,
			skip: skip
		});

		const result = pageBoard.map((board) => {
			return this.readCount(board);
		});

		return [result, total];
	}

	// 게시글  검색
	async searchPage(page: number, title: string) {
		const take = 10;
		const skip = page * 10 || 0;
		const [pageBoard, total] = await this.boardsRepository.findAndCount({
			order: {
				boardId: "DESC"
			},
			take: take,
			skip: skip
		});

		const result = pageBoard.map((board) => {
			return this.readCount(board);
		});

		return [result, total];
	}
}

import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	Request,
	UseGuards,
	UseInterceptors
} from "@nestjs/common";
import { SuccessCode } from "src/global/common/SuccessCode";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { BoardService } from "./board.service";
import { BoardResponse } from "./dto/boardResponse.dto";
import { UpdatePostDto } from "./dto/updatePost.dto";
import { WriteDto } from "./dto/write.dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller("board")
export class BoardController {
	constructor(private readonly boardService: BoardService) {}

	// 게시글 생성 API
	@UseGuards(JwtGuard)
	@Post()
	async createPost(@Request() req, @Body() writeDto: WriteDto) {
		return BoardResponse.return(
			SuccessCode.createPost(),
			await this.boardService.createPost(req.user, writeDto)
		);
	}

	// 게시글 수정 API
	@UseGuards(JwtGuard)
	@Patch(":boardId")
	async updatePost(
		@Param("boardId") boardId: number,
		@Request() req,
		@Body() updatePostDto: UpdatePostDto
	) {
		return BoardResponse.return(
			SuccessCode.updatePost(),
			await this.boardService.updatePost(boardId, req.user, updatePostDto)
		);
	}

	// 게시글 삭제 API
	@UseGuards(JwtGuard)
	@Delete(":boardId")
	async deletePost(@Param("boardId") boardId: number, @Request() req) {
		return BoardResponse.return(
			SuccessCode.deletePost(),
			await this.boardService.deletePost(boardId, req.user)
		);
	}

	// 게시글 내용 가져오기 API
	// jwt 토큰이 존재하는 사용자, 그렇지 못한 사용자 모두 사용가능
	@Get(":boardId")
	async readPost(@Request() req, @Param("boardId") boardId: number) {
		const token = req.get("Authorization").replace("bearer ", "");

		return BoardResponse.return(
			SuccessCode.getPost(),
			await this.boardService.readPost(token, boardId)
		);
	}

	// 게시글 목록 가져오기 API
	@Get()
	async getPage(@Query("page") page: number) {
		return BoardResponse.return(
			SuccessCode.getPost(),
			await this.boardService.getPage(page)
		);
	}

	// 게시글 검색 API
	@Get()
	async searchPage(
		@Query("page") page: number,
		@Query("title") title: string
	) {
		return BoardResponse.return(
			SuccessCode.getPost(),
			await this.boardService.searchPage(page, title)
		);
	}
}

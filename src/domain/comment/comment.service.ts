import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NotFoundUserException } from "../board/exception/NotFoundUserException";
import { Comments } from "../entities/comments.entity";
import { Users } from "../entities/users.entity";
import { CommentDto } from "./dto/comment.dto";
import { RecommentDto } from "./dto/recomment.dto";
import { updateComment } from "./dto/updateComment.dto";
import { commentVerifyException } from "./exception/commentVerifyException";
import { NotFoundCommentException } from "./exception/NotFoundCommentException";

@Injectable()
export class CommentService {
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,

		@InjectRepository(Comments)
		private commentsRepository: Repository<Comments>
	) {}

	// increment
	private async incrementCommentId() {
		const comment = await this.commentsRepository.findOne({
			order: {
				commentId: "DESC"
			}
		});
		return !comment ? 1 : comment.commentId + 1;
	}

	// 댓글을 생성한 유저인지 확인
	private async commentVerify(commentId: number, loginUser) {
		const findComment: Comments = await this.commentsRepository.findOne({
			commentId: commentId
		});

		const findUser: Users = await this.usersRepository.findOne({
			userId: loginUser.userId
		});

		if (!findComment) {
			throw new NotFoundCommentException();
		}

		if (!findUser) {
			throw new NotFoundUserException();
		}

		if (findComment.userId != findUser.userId) {
			throw new commentVerifyException();
		}

		return findComment;
	}

	// 댓글 생성
	async createComment(loginUser, commentDto: CommentDto) {
		const findUser = await this.usersRepository.findOne({
			userId: loginUser.userId
		});

		if (!findUser) {
			throw new NotFoundUserException();
		}

		const comment: Comments = new Comments();
		comment.boardId = commentDto.boardId;
		comment.contents = commentDto.contents;
		comment.depth = commentDto.depth;
		comment.userId = findUser.userId;
		comment.commentId = await this.incrementCommentId();

		return await this.commentsRepository.save(comment);
	}

	// 댓글 목룍
	async getCommentList(boardId: number, page: number) {
		const take = 10;
		const skip = page * 10 || 0;
		const [pageComment, total] = await this.commentsRepository.findAndCount(
			{
				where: {
					boardId: boardId
				},
				order: {
					commentId: "DESC"
				},
				take: take,
				skip: skip
			}
		);

		return [pageComment, total];
	}

	// 댓글 수정
	async updateComment(
		commentId: number,
		loginUser,
		updateComment: updateComment
	) {
		const findCommentId = await this.commentsRepository.findOne({
			commentId: commentId
		});

		if (!findCommentId) {
			throw new NotFoundCommentException();
		}

		const comment = await this.commentVerify(commentId, loginUser);

		comment.contents = updateComment.contents;
		return await this.commentsRepository.save(comment);
	}

	// 댓글 삭제
	async deleteComment(commentId: number, loginUser) {
		const comment = await this.commentVerify(commentId, loginUser);
		await this.commentsRepository.delete({ commentId: comment.commentId });
		return null;
	}

	// 대댓글 생성
	async createRecomment(loginUser, recommentDto: RecommentDto) {
		const findUser = await this.usersRepository.findOne({
			userId: loginUser.userId
		});

		if (!findUser) {
			throw new NotFoundUserException();
		}

		const comment: Comments = new Comments();
		comment.boardId = recommentDto.boardId;
		comment.parentId = recommentDto.parentId;
		comment.contents = recommentDto.contents;
		comment.depth = recommentDto.depth;
		comment.userId = findUser.userId;
		comment.commentId = await this.incrementCommentId();

		return await this.commentsRepository.save(comment);
	}

	// 대댓글 목록
	async getRecommentList(parentId: number, page: number) {
		const take = 10;
		const skip = page * 10 || 0;
		const [pageRecomment, total] =
			await this.commentsRepository.findAndCount({
				where: {
					parentId: parentId
				},
				order: {
					commentId: "DESC"
				},
				take: take,
				skip: skip
			});

		return [pageRecomment, total];
	}
}

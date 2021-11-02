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
import { InjectRepository } from "@nestjs/typeorm";
import { SuccessCode } from "src/global/common/SuccessCode";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { Boards } from "../entities/boards.entity";
import { Comments } from "../entities/comments.entity";
import { CommentService } from "./comment.service";
import { CommentDto } from "./dto/comment.dto";
import { commentResponse } from "./dto/commentResponse.dto";
import { updateComment } from "./dto/updateComment.dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller("comment")
export class CommentController {
	constructor(private commentService: CommentService) {}

	// 댓글 작성
	@UseGuards(JwtGuard)
	@Post()
	async writeComment(@Request() req, @Body() commentDto: CommentDto) {
		return commentResponse.return(
			SuccessCode.writeComment(),
			await this.commentService.createComment(req.user, commentDto)
		);
	}

	// 댓글 목록
	@Get()
	async getCommentList(
		@Query("boardId") boardId: number,
		@Query("page") page: number
	) {
		return commentResponse.return(
			SuccessCode.getComment(),
			await this.commentService.getCommentList(boardId, page)
		);
	}

	// 댓글 수정
	@UseGuards(JwtGuard)
	@Patch(":commentId")
	async updateComment(
		@Param("commentId") commentId: number,
		@Request() req,
		@Body() updateComment: updateComment
	) {
		return commentResponse.return(
			SuccessCode.updateComment(),
			await this.commentService.updateComment(
				commentId,
				req.user,
				updateComment
			)
		);
	}

	// 댓글 삭제
	@UseGuards(JwtGuard)
	@Delete(":commentId")
	async deleteComment(@Param("commentId") commentId: number, @Request() req) {
		return commentResponse.return(
			SuccessCode.deleteComment(),
			await this.commentService.deleteComment(commentId, req.user)
		);
	}
}

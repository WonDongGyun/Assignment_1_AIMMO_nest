import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundCommentException extends HttpException {
	constructor() {
		super("댓글을 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
	}
}

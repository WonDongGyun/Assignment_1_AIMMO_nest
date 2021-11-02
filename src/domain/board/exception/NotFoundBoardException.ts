import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundBoardException extends HttpException {
	constructor() {
		super("게시글을 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
	}
}

import { HttpException, HttpStatus } from "@nestjs/common";

export class BoardVerifyException extends HttpException {
	constructor() {
		super("해당 게시글에 권한이 없습니다.", HttpStatus.FORBIDDEN);
	}
}

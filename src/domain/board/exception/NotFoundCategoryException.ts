import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundCategoryException extends HttpException {
	constructor() {
		super("카테고리 번호를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
	}
}

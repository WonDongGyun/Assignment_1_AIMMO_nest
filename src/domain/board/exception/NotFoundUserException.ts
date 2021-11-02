import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundUserException extends HttpException {
	constructor() {
		super("NOT_FOUND", HttpStatus.NOT_FOUND);
	}
}

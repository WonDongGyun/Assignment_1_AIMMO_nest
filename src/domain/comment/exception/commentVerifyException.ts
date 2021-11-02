import { HttpException, HttpStatus } from "@nestjs/common";

export class commentVerifyException extends HttpException {
	constructor() {
		super("Forbidden", HttpStatus.FORBIDDEN);
	}
}

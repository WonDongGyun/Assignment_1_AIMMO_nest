import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";
import { UserDuplicateException } from "src/domain/user/exception/UserDuplicateException";
import { UserUnauthorizedException } from "src/domain/user/exception/UserUnauthorized Exception";
import { ErrorCode } from "../common/ErrorCode";
import { ErrorResponse } from "../common/ErrorResponse";

@Catch()
export class ExceptionHandler implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		if (exception instanceof UserDuplicateException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.userDuplicate()));
		}

		if (exception instanceof UserUnauthorizedException) {
			const status = exception.getStatus();
			const messages = exception.getResponse()['message'];
			response
				.status(status)
				.json(ErrorResponse.response(new ErrorCode(status, messages)));
		}

		if (exception instanceof BadRequestException) {
			const status = exception.getStatus();
			const messages = exception.getResponse()['message'];
			response
				.status(status)
				.json(ErrorResponse.response(new ErrorCode(status, messages)));
		}
		
	}
}

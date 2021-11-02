import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { UserDuplicateException } from "src/domain/user/exception/UserDuplicateException";
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
	}
}
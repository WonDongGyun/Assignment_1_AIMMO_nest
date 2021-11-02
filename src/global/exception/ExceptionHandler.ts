import {
	ArgumentsHost,
	BadRequestException,
	Catch,
	ExceptionFilter,
	UnauthorizedException
} from "@nestjs/common";
import { BoardVerifyException } from "src/domain/board/exception/BoardVerifyException";
import { NotFoundBoardException } from "src/domain/board/exception/NotFoundBoardException";
import { NotFoundCategoryException } from "src/domain/board/exception/NotFoundCategoryException";
import { NotFoundUserException } from "src/domain/board/exception/NotFoundUserException";
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
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.userUnauthorized()));
		}

		if (exception instanceof BadRequestException) {
			const status = exception.getStatus();
			const messages = exception.getResponse()["message"];
			response
				.status(status)
				.json(ErrorResponse.response(new ErrorCode(status, messages)));
		}

		if (exception instanceof BoardVerifyException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.boardVerify()));
		}

		if (exception instanceof NotFoundBoardException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.notFoundBoard()));
		}

		if (exception instanceof NotFoundCategoryException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.notFoundCategory()));
		}

		if (exception instanceof NotFoundUserException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.notFoundUser()));
		}

		if (exception instanceof UnauthorizedException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.userUnauthorized()));
		}

		response
			.status(400)
			.json(ErrorResponse.response(ErrorCode.badRequest()));
	}
}

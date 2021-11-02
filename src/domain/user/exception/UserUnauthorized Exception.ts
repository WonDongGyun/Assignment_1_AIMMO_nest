import { HttpException, HttpStatus } from "@nestjs/common";

export class UserUnauthorizedException extends HttpException {
    constructor() {
        super("Invalid user or password",HttpStatus.UNAUTHORIZED)
    }
}
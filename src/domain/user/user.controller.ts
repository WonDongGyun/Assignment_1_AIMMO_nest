import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { STATUS_CODES } from "http";
import { AuthService } from "../auth/auth.service";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { LocalAuthGuard } from "../auth/guards/localAuthGuard.guard";
import { SuccessCode } from "../global/common/SuccessCode";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserResponse } from "./dto/UserResponse.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {
	constructor(
		private userService: UserService,
		private authService: AuthService
	) {}

	@Post("signup")
	async signUp(@Body() createUserDto: CreateUserDto): Promise<UserResponse> {
		return new UserResponse(
			SuccessCode.createUser(),
			await this.userService.create(createUserDto)
		);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async login(@Request() req) {
		return new UserResponse(
			SuccessCode.createUser(),
			this.authService.makeToken(req.user)
		);
	}
}

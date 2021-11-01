import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guards/localAuthGuard.guard";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {
	constructor(
		private userService: UserService,
		private authService: AuthService
	) {}

	@Post("user")
	async signUp(@Body() createUserDto: CreateUserDto) {
		return await this.userService.create(createUserDto);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async login(@Request() req) {
		return await this.authService.makeToken(req.user);
	}
}

import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Post,
	Request,
	UseGuards,
	UseInterceptors
} from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guards/localAuthGuard.guard";
import { SuccessCode } from "../../global/common/SuccessCode";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserResponse } from "./dto/UserResponse.dto";
import { UserService } from "./user.service";

@UseInterceptors(ClassSerializerInterceptor)
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
			SuccessCode.login(),
			this.authService.makeToken(req.user)
		);
	}
}

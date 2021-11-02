import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../entities/users.entity";
import { CreateUserDto } from "./dto/createUser.dto";
import * as bcrypt from "bcrypt";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,
		private authService: AuthService
	) {}

	private async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	async create(createUserDto: CreateUserDto) {
		const users = new Users();
		users.userId = createUserDto.userId;
		users.password = await this.hashPassword(createUserDto.password);
		users.userName = createUserDto.userName;

		await this.usersRepository.save(users);
		return this.authService.makeToken(users);
	}
}

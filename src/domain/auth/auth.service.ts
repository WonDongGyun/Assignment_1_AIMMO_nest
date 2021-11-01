import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../entities/users.entity";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,
		private jwtService: JwtService
	) {}

	async validateUser(userId: string, password: string) {
		const user = await this.usersRepository.findOne({
			userId: userId
		});

		if (
			!user ||
			(user && !(await bcrypt.compare(password, user.password)))
		) {
			return null;
		}

		return user;
	}

	makeToken(user: Users) {
		const payload = { userId: user.userId, userName: user.userName };
		return { token: this.jwtService.sign(payload) };
	}
}

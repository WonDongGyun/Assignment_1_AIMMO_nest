import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../entities/users.entity";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { UserUnauthorizedException } from "../user/exception/UserUnauthorized Exception";

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,
		private jwtService: JwtService
	) {}

	async validateUser(userId: string, password: string): Promise<Users> {
		const user = await this.usersRepository.findOne({
			userId: userId
		});

		if (
			!user ||
			(user && !(await bcrypt.compare(password, user.password)))
		) {
			throw new UserUnauthorizedException();
		}

		return user;
	}

	makeToken(user: Users): string {
		const payload = { userId: user.userId, userName: user.userName };
		return this.jwtService.sign(payload);
	}
}

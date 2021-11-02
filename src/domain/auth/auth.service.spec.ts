import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Users } from "../entities/users.entity";
import { AuthService } from "./auth.service";
import { UserUnauthorizedException } from "../user/exception/UserUnauthorized Exception";
import { HttpException } from "@nestjs/common";

const userPassword = 'thisIsPassword';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const mockRepository = <T = any>(): MockRepository<T> => ({
	findOne: jest.fn(async (userId: string) => {
		let hashed =  await bcrypt.hash(userPassword, 10);
		const user = new Users();
		user.userId = userId["userId"];
		user.password = hashed;
		
		return {
			...user,
		}
	}),
	create: jest.fn(),
});

const mockJwtService = {
	makeToken: jest.fn(() => {
		return 'this is token'
	})
}

describe("AuthService", () => {
	let service: AuthService;
	let repository: MockRepository<Users>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthService,
				{
					provide: JwtService,
					useValue: mockJwtService,
				},
				{
					provide: getRepositoryToken(Users),
					useValue: mockRepository()
				}
			]
		}).compile();

		service = module.get<AuthService>(AuthService);
		repository = module.get(getRepositoryToken(Users));
	});

	it("should return user's information", async () => {
		const userId = "user1234";
		const response = await service.validateUser(userId, userPassword);
		expect(response.userId).toEqual(userId);
	});

	it("should return error", async () => {
		const userId = "user1234";
		const response = await service.validateUser(userId, 'wrongPassword')
			.catch(error => {
				console.log(error);
				
				expect(error.response).toBe(new UserUnauthorizedException().message);
			});
	});
});

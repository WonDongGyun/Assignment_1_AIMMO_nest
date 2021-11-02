import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthService } from "../auth/auth.service";
import { UserService } from "./user.service";
import { Users } from "../entities/users.entity";

const token = 'this is token';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const mockRepository = <T = any>(): MockRepository<T> => ({
	findOne: jest.fn(),
	save: jest.fn(),
});

const mockAuthService = {
	makeToken: jest.fn(() =>{
		return token;
	})
}

describe("UserService", () => {
	let service: UserService;
	let repository: MockRepository<Users>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{
					provide: AuthService,
					useValue: mockAuthService
				},
				{
					provide: getRepositoryToken(Users),
					useValue: mockRepository()
				}
			]
		}).compile();

		service = module.get<UserService>(UserService);
		repository = module.get<MockRepository<Users>>(getRepositoryToken(Users))
	});

	it("should return token", async () => {
		const dto = new Users();
		dto.userId = "user1234"
		dto.password = "password1234"
		dto.userName = "jully"

		await repository.findOne.mockReturnValue(null)
		const response = await service.create(dto);
		
		expect(response).toBe(token);
	});

	it("should return error", async () => {
		const dto = new Users();
		dto.userId = "user1234"
		dto.password = "password1234"
		dto.userName = "jully"

		await repository.findOne.mockReturnValue(dto);
		await service.create(dto)
			.catch(error  => {
				expect(error.status).toBe(406);
			});
	});


});

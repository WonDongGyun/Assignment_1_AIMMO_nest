import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { CreateUserDto } from "./dto/createUser.dto";


const mockUserService = {
	create: jest.fn(() => {
		return 'this is token'
	})
}

const mockAuthService = {
	makeToken: jest.fn(() => {
		return 'this is token'
	})
}

describe("UserController", () => {
	let controller: UserController;
	
	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			controllers: [ UserController ],
			providers: [
				{
					provide: UserService,
					useValue: mockUserService
				},
				{
					provide: AuthService,
					useValue: mockAuthService
				}
			]
		}).compile();

		controller = moduleRef.get<UserController>(UserController);
	});

	it("should return properties", async () => {
		const dto = new CreateUserDto();
		dto.userId = "userId";
		dto.password = "password1234"
		dto.userName = "jeoyou"

		const response = await controller.signUp(dto)

		expect(response).toHaveProperty('token');
		expect(response).toHaveProperty('message');
		expect(response).toHaveProperty('success');
		expect(response).toHaveProperty('statusCode');
	});

	it("should return properties", async () => {
		const form = { userId: "userId", password: "password1234" }
		const response = await controller.login(form);
		
		expect(response).toHaveProperty('token');
		expect(response).toHaveProperty('message');
		expect(response).toHaveProperty('success');
		expect(response).toHaveProperty('statusCode');
	})

});

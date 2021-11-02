import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { WriteDto } from './dto/write.dto';

const mockService = {
  createPost: jest.fn()
}
describe('BoardController', () => {
  let controller: BoardController;
  let service: BoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [
        {
          provide: BoardService,
          useValue: mockService
        }
      ]
    }).compile();

    controller = module.get<BoardController>(BoardController);
    service = module.get<BoardService>(BoardService);
  });

  it('should return properties', async () => {
    const dto = {
      title: "test Title",
      contents: "test Contents",
      categoryCode: 0
    }
    const user = {
      userId: "userId",
      userName: "UserName"
    }

    mockService.createPost.mockReturnValue({ title: "테스트 타이틀" })
    const response = await controller.createPost(user,dto);

    

		expect(response).toHaveProperty('data');
		expect(response).toHaveProperty('message');
		expect(response).toHaveProperty('success');
		expect(response).toHaveProperty('statusCode');
  });
});

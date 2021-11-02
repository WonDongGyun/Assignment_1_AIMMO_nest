import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Boards } from '../entities/boards.entity';
import { CategoryCode } from '../entities/categoryCode.entity';
import { Users } from '../entities/users.entity';
import { BoardService } from './board.service';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const mockRepository = <T = any>(): MockRepository<T> => ({
	findOne: jest.fn(),
	save: jest.fn(),
});

const mockJwtService = {
	makeToken: jest.fn(() => {
		return 'this is token'
	})
}


describe('BoardService', () => {
  let service: BoardService;
  let userRepository: MockRepository<Users>;
  let boardRepository: MockRepository<Boards>;
  let categoryRepository: MockRepository<CategoryCode>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardService,
        {
          provide: getRepositoryToken(Users),
          useValue: mockRepository()
        },
        {
          provide: getRepositoryToken(Boards),
          useValue: mockRepository()
        },
        {
          provide: getRepositoryToken(CategoryCode),
          useValue: mockRepository()
        },
        {
          provide: JwtService,
          useValue: mockJwtService
        }
      ],
    }).compile();

    service = module.get<BoardService>(BoardService);
    userRepository = module.get<MockRepository>(getRepositoryToken(Users));
    boardRepository = module.get<MockRepository>(getRepositoryToken(Boards));
    categoryRepository = module.get<MockRepository>(getRepositoryToken(CategoryCode));
  });

  it('should return board', async () => {
    const user = new Users();
    user.userId = "userId1234";
    user.userName = "abcd";

    const categoryCode = new CategoryCode();
    categoryCode.categoryCode = 0;

    const board: Boards = new Boards();
    board.title = "test";
    board.contents = "contents";
    board.categoryCode = 0;
    board.userId = "userId1234";
    board.boardId = 1;

    await userRepository.findOne.mockReturnValue(user);
    await categoryRepository.findOne.mockReturnValue(categoryCode);
    await boardRepository.save.mockReturnValue(board);

    const result = await service.createPost(user, board);


    expect(result.title).toEqual(board.title);
  });
});

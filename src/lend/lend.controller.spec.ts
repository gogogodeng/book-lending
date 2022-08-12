import { Test, TestingModule } from '@nestjs/testing';
import { LendController } from './lend.controller';

describe('LendController', () => {
  let controller: LendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LendController],
    }).compile();

    controller = module.get<LendController>(LendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

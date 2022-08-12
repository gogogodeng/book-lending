import { Test, TestingModule } from '@nestjs/testing';
import { LendService } from './lend.service';

describe('LendService', () => {
  let service: LendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LendService],
    }).compile();

    service = module.get<LendService>(LendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

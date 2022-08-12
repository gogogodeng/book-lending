import { Module } from '@nestjs/common';
import { LendController } from './lend.controller';
import { LendService } from './lend.service';

@Module({
  controllers: [LendController],
  providers: [LendService],
})
export class LendModule {}

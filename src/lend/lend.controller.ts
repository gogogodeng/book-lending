import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('lend')
@UseGuards(AuthGuard('jwt'))
export class LendController {
  @Get('test')
  async test(@Request() req: any) {
    return req.user;
  }
}

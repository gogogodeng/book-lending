import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcryptjs from 'bcryptjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('checkUser')
  async checkUser(@Request() req: any) {
    console.log(req.query);
    const { username, password } = req.query;
    const result: any = await this.authService.checkUser({
      username,
    });
    const isOk = bcryptjs.compareSync(password, result.password);
    if (!isOk) {
      throw new HttpException('用户验证失败', HttpStatus.UNAUTHORIZED);
    }
    return result;
  }

  @Get('register')
  async register(@Request() req: any) {
    console.log(req.query);
    const { username, password } = req.query;
    const result: any = await this.authService.register({
      username,
      password,
    });
    return result;
  }
}

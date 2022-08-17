import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService, // 要在这里注入对象，就必须在模块中注册
  ) {}

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

    return {
      access_token: this.jwtService.sign({
        id: result.id,
        username: result.username,
        name: result.name,
        companyId: result.companyId,
      }),
    };
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

  @UseGuards(AuthGuard('jwt'))
  @Get('test')
  async test(@Request() req: any) {
    return req.user;
  }
}

import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';

import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';

import { TokenWrapper, User } from '@spark-rpg/shared-models';

import { LoginRequestDto, RegisterRequestDto } from './features/auth/dto/auth.dto';
import { LocalAuthGuard } from './features/auth/guards/local-auth.guard';
import { AuthService } from './features/auth/services/auth.service';
import { UserService } from './features/user/services/user.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Body() registerRequestDto: RegisterRequestDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(registerRequestDto.password, salt);

    await this.userService.create({...registerRequestDto, password: hash});

    return;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() loginRequestDto: LoginRequestDto,
    @Req() request: Request<{ user: User }>,
    @Res({passthrough: true}) response: Response
  ): Promise<void> {
    const {token}: TokenWrapper = await this.authService.login(request.user as User);

    response.cookie('user_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000),
    });

    return;
  }

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  public logout(@Res({passthrough: true}) response: Response): Promise<void> {
    response.cookie('user_token', '', {
      httpOnly: true,
      expires: new Date(Date.now()),
    });

    return;
  }
}

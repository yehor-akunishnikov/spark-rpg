import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';

import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';

import { LoginRequestDto, RegisterRequestDto } from '../dto/auth.dto';
import { UserService } from '../../user/services/user.service';
import { TokenWrapper, User } from '@spark-rpg/shared-models';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
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
      sameSite: 'none'
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

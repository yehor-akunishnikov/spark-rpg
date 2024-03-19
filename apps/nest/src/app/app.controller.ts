import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';

import { LoginResponse, User } from '@spark-rpg/shared-models';

import { LocalAuthGuard } from './features/auth/guards/local-auth.guard';
import { CreateUserRequestDto } from './features/user/dto/user.dto';
import { AuthService } from './features/auth/services/auth.service';
import { UserService } from './features/user/services/user.service';
import { LoginRequestDto, LoginResponseDto } from './features/auth/dto/auth.dto';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Body() loginRequestDto: LoginRequestDto, @Req() request: Request<{user: User}>): Promise<LoginResponse> {
    const loginResponse: LoginResponse = await this.authService.login(request.user as User);

    return plainToInstance(LoginResponseDto, loginResponse);
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Body() createUserRequestDto: CreateUserRequestDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserRequestDto.password, salt);

    await this.userService.create({...createUserRequestDto, password: hash});

    return;
  }
}

import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query, Req, UseGuards,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { Request } from 'express';

import { User, UserMe, UserProfile } from '@spark-rpg/shared-models';

import { UserMeResponseDto, UserProfileResponseDto } from '../dto/user.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
  }

  @Get()
  public async getAll(@Query('username') username?: string): Promise<UserProfile[]> {
    const users = await this.userService.findAll(username);

    return plainToInstance(UserProfileResponseDto, users);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  public async getUserMe(@Req() request: Request<{user: User}>): Promise<UserMe> {
    const username = (request.user as User).username;
    const user = await this.userService.findOne(username);

    return plainToInstance(UserMeResponseDto, user);
  }

  @Get(':username')
  public async getOne(@Param('username') username: string): Promise<UserProfile> {
    const user = await this.userService.findOne(username);

    return plainToInstance(UserProfileResponseDto, user);
  }

  @Delete(':character')
  @HttpCode(HttpStatus.OK)
  public async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(id);

    return;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { UserProfile } from '@spark-rpg/shared-models';

import { CreateUserDto, UserProfileResponseDto } from '../dto/user.dto';
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

  @Get(':username')
  public async getOne(@Param('username') username: string): Promise<UserProfile> {
    const user = await this.userService.findOne(username);

    return plainToInstance(UserProfileResponseDto, user);
  }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto): Promise<UserProfile> {
    const user = await this.userService.create(createUserDto);

    return plainToInstance(UserProfileResponseDto, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(id);

    return;
  }
}

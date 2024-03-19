import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserEntity } from './models/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
  ],
  exports: [UserService],
})
export class UserModule {}

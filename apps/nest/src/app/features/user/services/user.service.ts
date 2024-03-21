import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository, FindOptionsWhere } from 'typeorm';

import { RegisterRequestDto } from '../../auth/dto/auth.dto';
import { UserEntity } from '../models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {
  }

  public async create(registerRequestDto: RegisterRequestDto): Promise<UserEntity> {
    const user = this.userRepository.create(registerRequestDto);

    await this.userRepository.insert(user);

    return user;
  }

  public findAll(username?: string): Promise<UserEntity[]> {
    const findOptionsWhere: FindOptionsWhere<UserEntity> = {};

    if (username) {
      findOptionsWhere.username = username;
    }

    return this.userRepository.find({where: findOptionsWhere});
  }

  public findOne(username: string, relations: string[] = []): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({where: {username}, relations});
  }

  public delete(id: string): Promise<DeleteResult> {
    return this.userRepository.delete({id});
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { LoginResponse, User } from '@spark-rpg/shared-models';

import { UserService } from '../../user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {
  }

  public async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne(username);
    const isPasswordEqual = await bcrypt.compare(pass, user.password);

    if (user && isPasswordEqual) {
      const {password, ...result} = user;

      return result;
    }

    return null;
  }

  public async login({username, id}: User): Promise<LoginResponse> {
    const payload = {username, sub: id};

    return {token: this.jwtService.sign(payload)};
  }
}

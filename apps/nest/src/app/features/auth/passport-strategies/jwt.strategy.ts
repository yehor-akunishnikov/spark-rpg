import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

import { User } from '@spark-rpg/shared-models';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken()
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  public async validate(payload: { sub: string, username: string }): Promise<User> {
    return { id: payload.sub, username: payload.username };
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'user_token' in req.cookies && req.cookies['user_token'].length > 0) {
      return req.cookies['user_token'];
    }

    return null;
  }
}

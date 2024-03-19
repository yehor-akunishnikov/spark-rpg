import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { LocalStrategy } from './passport-strategies/local.strategy';
import { JwtStrategy } from './passport-strategies/jwt.strategy';
import { AuthService } from './services/auth.service';
import { UserModule } from '../user/user.module';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '1h'}
    }),
  ],
  exports: [AuthService]
})
export class AuthModule {
}

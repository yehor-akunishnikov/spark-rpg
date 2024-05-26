import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { LocalStrategy } from './passport-strategies/local.strategy';
import { JwtStrategy } from './passport-strategies/jwt.strategy';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserModule } from '../user/user.module';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

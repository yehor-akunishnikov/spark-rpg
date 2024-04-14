import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CharacterModule } from './features/character/character.module';
import { UserModule } from './features/user/user.module';
import { AuthModule } from './features/auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env', }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      port: Number(process.env.POSTGRES_PORT),
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    AuthModule,
    CharacterModule
  ],
  controllers: [AppController],
})
export class AppModule {}

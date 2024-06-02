import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './features/user/user.module';
import { AuthModule } from './features/auth/auth.module';
import { MapModule } from './features/map/map.module';
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
    MapModule
  ],
  controllers: [AppController],
})
export class AppModule {}

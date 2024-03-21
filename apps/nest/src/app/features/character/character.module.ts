import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CharacterController } from './controllers/character/character.controller';
import { CharacterService } from './services/character/character.service';
import { CharacterEntity } from './models/character.entity';

@Module({
  providers: [CharacterService],
  controllers: [CharacterController],
  imports: [
    TypeOrmModule.forFeature([CharacterEntity]),
  ],
  exports: [CharacterService]
})
export class CharacterModule {}

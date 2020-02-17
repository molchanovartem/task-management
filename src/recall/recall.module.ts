import { Module } from '@nestjs/common';
import { RecallService } from './recall.service';
import { RecallController } from './recall.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecallRepository } from './recall.repository';

@Module({
    imports: [
      TypeOrmModule.forFeature([RecallRepository]),
    ],
    controllers: [RecallController],
    providers: [RecallService],
  })
  export class TasksModule {}

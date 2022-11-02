import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRespository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRespository],
})
export class MessagesModule {}

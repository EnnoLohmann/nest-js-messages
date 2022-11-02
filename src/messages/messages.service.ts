import { Injectable } from '@nestjs/common';
import { MessagesRespository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRespository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
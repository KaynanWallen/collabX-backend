import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './repositories/comment.repository';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { UpdateCommentDTO } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private CommentsRepository: CommentsRepository) {}

  create(createProfileDto: CreateCommentDTO, userTokenId: number | null) {
    return this.CommentsRepository.create(createProfileDto, userTokenId);
  }

  findAll() {
    return this.CommentsRepository.findAll();
  }

  findOne(id: number) {
    return this.CommentsRepository.findOne(id);
  }

  update(id: number, updateProfileDto: UpdateCommentDTO, userTokenId: number | null) {
    return this.CommentsRepository.update(id, updateProfileDto, userTokenId);
  }

  remove(id: number, userTokenId: number | null) {
    return this.CommentsRepository.remove(id, userTokenId);
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from './base.service';
import { Suburb } from './suburb.entity';

@Injectable()
export class SuburbService extends CrudService {
  constructor(
    @InjectRepository(Suburb)
    private readonly repo: Repository<Suburb>,
  ) {
    super(repo);
  }
}
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from './base.service';
import { Country } from './country.entity';

@Injectable()
export class CountryService extends CrudService {
  constructor(
    @InjectRepository(Country)
    private readonly repo: Repository<Country>,
  ) {
    super(repo);
  }
}
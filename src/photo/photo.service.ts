import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findOne(id: number): Promise<Photo> {
    const obj = await this.photoRepository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  async addPhoto(p: Photo): Promise<Photo> {
    delete p.id;
    await this.photoRepository.save(p);
    return p;
  }

  async updatePhoto(id: number, p: Photo): Promise<Photo> {
    if (await this.photoRepository.findOne(id)) {
      delete p.id;
      return await this.photoRepository.save({
        ...p,
        id,
      });
    } else {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number) {
    if (await this.findOne(id)) {
      return await this.photoRepository.delete(id);
    }
  }
}

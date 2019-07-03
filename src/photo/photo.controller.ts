import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  addPhoto(@Body() data: Photo): Promise<Photo> {
    return this.photoService.addPhoto(data);
  }

  @Put(':id')
  updatePhoto(@Param('id') id: number, @Body() data: Photo): Promise<Photo> {
    return this.photoService.updatePhoto(id, data);
  }

  @Delete(':id')
  deletePhoto(@Param('id') id: number) {
    return this.photoService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Photo> {
    return this.photoService.findOne(id);
  }
}

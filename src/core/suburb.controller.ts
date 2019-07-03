import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SuburbService } from './suburb.service';
import { Suburb } from './suburb.entity';

@Controller('suburbs')
export class SuburbController {
  constructor(private readonly photoService: SuburbService) {}

  @Get()
  findAll(): Promise<Suburb[]> {
    return this.photoService.findAll();
  }

  @Post()
  addSuburb(@Body() data: Suburb): Promise<Suburb> {
    return this.photoService.addOne(data);
  }

  @Put(':id')
  updateSuburb(@Param('id') id: number, @Body() data: Suburb): Promise<Suburb> {
    return this.photoService.updateOne(id, data);
  }

  @Delete(':id')
  deleteSuburb(@Param('id') id: number) {
    return this.photoService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Suburb> {
    return this.photoService.findOne(id);
  }
}

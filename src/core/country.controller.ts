import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('countries')
export class CountryController {
  constructor(private readonly photoService: CountryService) {}

  @Get()
  findAll(): Promise<Country[]> {
    return this.photoService.findAll();
  }

  @Post()
  addCountry(@Body() data: Country): Promise<Country> {
    return this.photoService.addOne(data);
  }

  @Put(':id')
  updateCountry(@Param('id') id: number, @Body() data: Country): Promise<Country> {
    return this.photoService.updateOne(id, data);
  }

  @Delete(':id')
  deleteCountry(@Param('id') id: number) {
    return this.photoService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Country> {
    return this.photoService.findOne(id);
  }
}

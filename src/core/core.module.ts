import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryService } from './country.service';
import { SuburbService } from './suburb.service';
import { Suburb } from './suburb.entity';
import { Country } from './country.entity';
import { CountryController } from './country.controller';
import { SuburbController } from './suburb.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Suburb, Country])],
  providers: [CountryService, SuburbService],
  controllers: [CountryController, SuburbController],
})
export class PhotoModule {}

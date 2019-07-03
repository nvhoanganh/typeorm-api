import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Point } from 'geojson';
import { Country } from './country.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Suburb extends BaseEntity {
  @Column({ length: 500 })
  name: string;

  @Column({ length: 5 })
  postcode: string;

  @Column('point', { nullable: true })
  location?: Point;

  @ManyToOne(type => Country, user => user.suburbs)
  country: Country;
}

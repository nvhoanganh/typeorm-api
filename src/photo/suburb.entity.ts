import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Point } from 'geojson';
import { Country } from './country.entity';

@Entity()
export class Suburb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 5 })
  postcode: string;

  @Column('point')
  location?: Point;

  @ManyToOne(type => Country, user => user.suburbs)
  country: Country;
}

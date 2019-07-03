import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Point } from 'geojson';
import { Suburb } from './suburb.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 2 })
  isoCode: string;

  @Column('point')
  location?: Point;

  @OneToMany(type => Suburb, suburb => suburb.country)
  suburbs: Suburb[];
}

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Point } from 'geojson';
import { Suburb } from './suburb.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Country extends BaseEntity {
  @Column({ length: 500 })
  name: string;

  @Column({ length: 2 })
  isoCode: string;

  @Column('point', { nullable: true })
  location?: Point;

  @OneToMany(type => Suburb, suburb => suburb.country)
  suburbs: Suburb[];
}

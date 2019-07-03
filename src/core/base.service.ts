import { HttpException, HttpStatus } from '@nestjs/common';
import { BaseEntity } from './base.entity';

export class CrudService {
  constructor(private readonly ormRepo: any) {}

  async findAll(): Promise<any[]> {
    return await this.ormRepo.find();
  }

  async findOne(id: number): Promise<any> {
    const obj = await this.ormRepo.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  async addOne(p: BaseEntity): Promise<any> {
    delete p.id;
    await this.ormRepo.save(p);
    return p;
  }

  async updateOne(idToUpdate: number, p: BaseEntity): Promise<any> {
    const obj = await this.ormRepo.findOne(idToUpdate);
    if (obj) {
      const update = {
        ...obj,
        ...p,
        dateUpdated: new Date(),
      };

      // Object.keys(p).forEach(k => {
      //   // transfer , can't use spread ops because of the point data type
      //   update[k] = p[k];
      // });

      console.log(`updating object`, update);
      return await this.ormRepo.save(update);
    } else {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number) {
    if (await this.findOne(id)) {
      return await this.ormRepo.delete(id);
    }
  }
}

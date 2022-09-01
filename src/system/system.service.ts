import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { find } from 'rxjs';
import { systemDTO } from 'src/DTO/system.dto';

import { System } from './system.model';
@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System') private readonly systemModel: Model<System>) { }
    
      async create(system: System) {
        const createdSystem = new this.systemModel({
          subject: system.subject,
          name: system.name,
          urlImage: system.urlImage,
          admin_id:system.admin_id,
          description:system.description,
          communicationDetails: system.communicationDetails
        });
        await createdSystem.save();
      }
    
      findAll(): Promise<System[]> {
        return this.systemModel.find().exec();
      }

      //find all systems's user
      async find(systemId: string): Promise<systemDTO[]> {
        return await this.systemModel.find({ admin_id: systemId });

    }
    async update(updateSystem: System, id:string) {
      const _updatesystem = this.systemModel.findOne({_id :id});
      const _system={$set:({
        subject:updateSystem.subject,
        name: updateSystem.name,
        urlImage: updateSystem.urlImage,
        admin_id: updateSystem.admin_id,
        description: updateSystem.description,
        communicationDetails: updateSystem.communicationDetails,
      })};
      await this.systemModel.updateOne({_id:Object(id)},updateSystem);
    }
    async delete(idS:string) {
      await this.systemModel.deleteOne({_id:idS});
  }

}

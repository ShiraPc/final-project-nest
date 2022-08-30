import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { systemDTO } from 'src/DTO/system.dto';

import { System } from './system.model';

@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System') private readonly systemModel: Model<System>) { }
    
      async create(system: System) {
        const createdSystem = new this.systemModel({
          topic: system.topic,
          urlName: system.urlName,
          urlImage: system.urlImage,
          objectName:system.objectName,
          managerUid:system.managerUid,
          description:system.description,
          communicationDetails: system.communicationDetails
        });
        await createdSystem.save();
      }
    
      findAll(): Promise<System[]> {
        return this.systemModel.find().exec();
      }

      async findOne(systemId: string): Promise<systemDTO> {
        return await this.systemModel.findOne({ _id: systemId });
    }
    async update(updateSystem: System, id:string) {
      const _updatesystem = this.systemModel
      .findOne({_id :id});
      const _system={$set:({
        uid:updateSystem.uid,
        topic: updateSystem.topic,
        urlName: updateSystem.urlName,
        urlImage: updateSystem.urlImage,
        objectName: updateSystem.objectName,
        managerUid: updateSystem.managerUid,
        description: updateSystem.description,
        communicationDetails: updateSystem.communicationDetails,
      })};
      await this.systemModel.updateOne({_id:Object(id)},updateSystem);
    }
    async delete(idS:string) {
      await this.systemModel.deleteOne({_id:idS});
  }

}

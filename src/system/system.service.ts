import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { systemDTO } from 'src/DTO/system.dto';
import { User } from 'src/user/user.model';
import { System } from './system.model';
@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System') private readonly systemModel: Model<System>) { }
        // @InjectModel('User') private readonly userModel: Model<User>
    
      async create(system: System) {
        const createdSystem = new this.systemModel({
          urlName: system.urlName,
          urlImage: system.urlImage,
          subject:system.subject,
          manager_id:system.manager_id,
          description:system.description,
          communicationDetails: system.communicationDetails
        });
        await createdSystem.save();
        // const updtUser= this.userModel.findOne({uid:createdSystem.managerUid})
      }
    
      findAll(): Promise<System[]> {
        return this.systemModel.find().exec();
      }

      async find(systemId: string): Promise<systemDTO[]> {
        return await this.systemModel.find({ manager_id: systemId });
    }
    async update(updateSystem: System, id:string) {
      const _updatesystem = this.systemModel.findOne({_id :id});
      const _system={$set:({
        urlName: updateSystem.urlName,
        urlImage: updateSystem.urlImage,
        subject: updateSystem.subject,
        manager_id: updateSystem.manager_id,
        description: updateSystem.description,
        communicationDetails: updateSystem.communicationDetails,
      })};
      await this.systemModel.updateOne({_id:Object(id)},updateSystem);
    }
    async delete(idS:string) {
      await this.systemModel.deleteOne({_id:idS});
  }
}

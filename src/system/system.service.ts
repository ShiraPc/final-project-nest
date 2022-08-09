import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';

@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System') private readonly systemModel: Model<System>) { }
    
      async create(system: System) {
        const createdSystem = new this.systemModel({
          topic: system.topic,
          urlName: system.urlName,
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
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { managerDTO } from 'src/DTO/manager.dto';
import { Manager } from './Manager.model';

@Injectable()
export class ManagerService {
    constructor(
        @InjectModel('Manager') private readonly managerModel: Model<Manager>) { }
    
    async create(manager: Manager) {
        const createdManager = new this.managerModel({
            user_id: manager.user_id,
            system_id:manager.system_id,
            active:manager.active,
           display_name:manager.display_name,
           role:manager.role,
           invitation_sent: [],
        });
        await createdManager.save();
    }
    
    findAll(): Promise<Manager[]> {
        return this.managerModel.find().exec();
    }

    async findOne(managerId: string): Promise<managerDTO> {
        return await this.managerModel.findOne({ _id: managerId });
    }

    async update(updateManager: Manager, id:string) {
      const _updateManager = this.managerModel.findOne({_id :id});
      const _manager={$set:({
            user_id: updateManager.user_id,
            system_id: updateManager.system_id,
            active:updateManager.active,
            display_name:updateManager.display_name,
            role:updateManager.role,
            invitation_sent:updateManager.invitation_sent,
            })};
          
      
      await this.managerModel.updateOne({_id:Object(id)},updateManager);
    }
    async delete(idS:string) {
      await this.managerModel.deleteOne({_id:idS});
  }
}

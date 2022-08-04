import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>) { }

  async create(user: User) {
    const createdUser = new this.userModel({
      name: user.name,
      email: user.email,
      password: user.password
    });
    await createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}





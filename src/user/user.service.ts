import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';

import { User } from 'src/schemas/user.schema';
//import { User, UserDocument } from './schemas/user.schema';
//import { CreateUserDto } from './dto/create-user.dto';

// @Injectable()
// export class CatsService {
//   //constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}

//   async create(createCatDto: CreateUserDto): Promise<User> {
//     const createdCat = new this.catModel(createCatDto);
//     return createdCat.save();
//   }

//   async findAll(): Promise<User[]> {
//     return this.catModel.find().exec();
//   }
// }


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






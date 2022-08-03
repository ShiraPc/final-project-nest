// import { Get, Injectable, Post } from "@nestjs/common";
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, userSchema } from "src/schemas/user.schema";

// @Injectable({})
// export class UserService{
//       [x: string]: any;
//       async create(createUser: User): Promise<User> {
//         const createdUser = new this.catModel(createUser);
//         return createdUser.save();
//       }

//       async findAllUsers(): Promise<User[]> {
//         return this.userSchema.find().exec();
//       }
// }
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
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




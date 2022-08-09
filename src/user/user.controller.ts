<<<<<<< HEAD
import { Controller, Get, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, userSchema } from "src/schemas/user.schema";
//import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    //constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    
=======
import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from './user.model';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }
>>>>>>> 220e0781d751e0e66990d5cb75778021f13cffd8

    @Post()
    createUser(@Body() newUser: User) {
        this.userService.create(newUser);
    }
<<<<<<< HEAD
    // @Get()
    // getAllUsers(){  
    //     const results = findAllUsers();
    //     return results;
    // };
    

    // @Get()
    // getUser(id:string){
    //     userSchema.get(id);
    //     //  users.forEach(element => {       
    //     //  });
      
    //   }
=======
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    };

>>>>>>> 220e0781d751e0e66990d5cb75778021f13cffd8
}



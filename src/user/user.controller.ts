import { Body, Controller, Get, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, userSchema } from "src/schemas/user.schema";
//import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    //constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    

    @Post()
    createUser(@Body() newUser: User) {
        this.userService.create(newUser);
    }
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
}



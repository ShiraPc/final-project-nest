
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";
// import { User, userSchema } from "src/schemas/user.schema";
// //import { UserService } from "./user.service";

// import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
// import { User } from './user.model';
import { UserService } from "./user.service";


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

    @Get('/:id')
    getOneUsers(@Param('id') id:string) {
        return this.userService.findOne(id);
    };
    
    @Put('/:id')
    updateUser(@Body() updateUser:User, @Param('id') id:string) {
        return this.userService.update(updateUser , id);
    };

    @Delete('/:id')
    deleteUser(@Param('id') id:string){
        return this.userService.delete(id);
    }


}



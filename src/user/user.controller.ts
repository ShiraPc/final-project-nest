import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from './user.model';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post()
    createUser(@Body() newUser: User) {
        this.userService.create(newUser);
    }
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    };

}



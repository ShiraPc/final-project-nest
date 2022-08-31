import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Request } from './request.model';
import { RequestService } from "./request.service";

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) {
    }

    @Post()
    createUser(@Body() newRequest: Request) {
        this.requestService.create(newRequest);
    }
    @Get()
    getAllUsers() {
        return this.requestService.findAll();
    };

    @Get('/:id')
    getOneUsers(@Param('id') id:string) {
        return this.requestService.findOne(id);
    };
    
    @Put('/:id')
    updateUser(@Body() updateRequest:Request, @Param('id') id:string) {
        return this.requestService.update(updateRequest , id);
    };

    @Delete('/:id')
    deleteUser(@Param('id') id:string){
        return this.requestService.delete(id);
    }

}



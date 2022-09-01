
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { System } from './system.model';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {

    constructor(private systemService: SystemService) {
    }

    @Post()
    createSystem(@Body() newSystem: System) {
        debugger
        this.systemService.create(newSystem);
    }
    @Get()
    getSystem() {
        debugger
        return this.systemService.findAll();
    };
    @Get('/:id')
    getOneSystem(@Param('id') id:string) {
        return this.systemService.find(id);
    };
    @Put('/:id')
    updateSystem(@Body() updateSystem:System, @Param('id') id:string) {
        return this.systemService.update(updateSystem , id);
    };
    @Delete('/:id')
    deleteSystem(@Param('id') id:string){
        return this.systemService.delete(id);
    }

}

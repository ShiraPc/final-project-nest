import { Body, Controller, Get, Post } from '@nestjs/common';
import { System } from './system.model';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {

    constructor(private systemService: SystemService) {
    }

    @Post()
    createSystem(@Body() newSystem: System) {
        this.systemService.create(newSystem);
    }
    @Get()
    getSystem() {
        return this.systemService.findAll();
    };
}

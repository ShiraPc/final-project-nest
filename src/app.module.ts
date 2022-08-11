import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { SystemModule } from './system/system.module';



@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/finalProjectDB'),UserModule],

})

export class AppModule { 
  
}

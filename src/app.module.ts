import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { SystemModule } from './system/system.module';



@Module({

  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/finalProjectDB'),UserModule, SystemModule],
  controllers: [],
  providers: [],

})

export class AppModule { 
  
}

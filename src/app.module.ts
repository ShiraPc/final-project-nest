import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { SystemModule } from './system/system.module';



@Module({
<<<<<<< HEAD
  imports: [AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/finalProjectDB'),UserModule],
=======
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/finalProjectDB'),UserModule, SystemModule],
  controllers: [],
  providers: [],
>>>>>>> 220e0781d751e0e66990d5cb75778021f13cffd8

})

export class AppModule { 
  
}

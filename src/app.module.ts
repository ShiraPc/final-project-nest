import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { LocationModule } from './location/location.module';
import { RequestModule } from './request/request.module';
import { ManagerModule } from './manager/manager.module';



@Module({

  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://ShiraShr:SLzsVbcGC7gSlWPp@cluster0.i0ip4gt.mongodb.net/?retryWrites=true&w=majority'),UserModule, SystemModule, LocationModule, RequestModule,ManagerModule],
  controllers: [],
  providers: [],

})

export class AppModule { 
  
}

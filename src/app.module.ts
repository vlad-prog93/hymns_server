import { Module } from "@nestjs/common";
import { HymnsModule } from './hymns/hymns.module';
import { MongooseModule } from '@nestjs/mongoose'


@Module({
  controllers: [],
  providers: [],
  imports: [MongooseModule.forRoot('mongodb://mongodb:27017/hymns'),
    HymnsModule],

})
export class AppModule { }
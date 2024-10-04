import { Module } from "@nestjs/common";
import { HymnsModule } from './hymns/hymns.module';
import { MongooseModule } from '@nestjs/mongoose'


@Module({
  controllers: [],
  providers: [],
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/hymns'),
    HymnsModule],

})
export class AppModule { }
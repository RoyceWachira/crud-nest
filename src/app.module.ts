import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './stud/stud.module';

@Module({
  imports: [StudentModule,MongooseModule.forRoot('mongodb://localhost:27017/practice')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

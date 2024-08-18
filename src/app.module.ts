import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { typeORM } from './config/typeORM';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(typeORM()), MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

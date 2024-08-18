import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { typeORM } from './config/typeORM';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(typeORM()), MovieModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'movies-app',
    password: 'cirulli',
    database: 'Movies-David',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
    // logging: true,
  };
};

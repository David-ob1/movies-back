import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'usuarios-ejercicio-orm',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
    // logging: true,
  };
};

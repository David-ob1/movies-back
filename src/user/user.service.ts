import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/common/utils/hashPassword.utils';

@Injectable()
export class UserService {

  constructor (
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const password = await hashPassword(createUserDto.password)
    return this.userRepository.save({...createUserDto, password})
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: number) {
    return this.userRepository.findOne({where: {id:id}})

  }

  update(id: number, updateUserDto: UpdateUserDto) {

    return this.userRepository.update({id:id},updateUserDto)
  }

  remove(id: number) {
    return this.userRepository.softDelete({id:id});
  }

  hardDelete(id: number){
    return this.userRepository.delete({id:id})
  }

  
}

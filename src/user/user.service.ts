import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'name1',
      email: 'email1',
      role: 'ENTERN',
    },
    {
      id: 2,
      name: 'name2',
      email: 'email2',
      role: 'ENTERN',
    },
    {
      id: 3,
      name: 'name3',
      email: 'email3',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'name4',
      email: 'email4',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'name5',
      email: 'email5',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'name6',
      email: 'email6',
      role: 'ENGINEER',
    },
  ];

  // we will create a methods for userController

  findAll(role?: 'ENTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (!rolesArray.length)
        throw new NotFoundException('user role not found');
      return rolesArray;
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}

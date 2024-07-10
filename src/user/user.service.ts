import { Injectable } from '@nestjs/common';

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
      role: 'ENTERN',
    },
    {
      id: 4,
      name: 'name4',
      email: 'email4',
      role: 'ENTERN',
    },
  ];

  // we will create a methods for userController

  findAll(role?: 'ENTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'ENTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    userByHighestId = [...this.users].sort((a, b) => (a.id = b.id));

    const newUser = {
      id: userByHighestId[0] + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'ENTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return [...user, ...updatedUser];
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

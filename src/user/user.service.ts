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
}

import {Injectable} from '@angular/core';
import {User} from "../domain/user";

@Injectable()
export class UserService {

  user: User = new User();

  private users: User[] = [
    {id: 1, login: "admin", password: "12345", name: "test1", role: ["ADMIN", "USER"]},
    {id: 2, login: "admin2", password: "12345", name: "test2", role: ["USER"]},
    {id: 3, login: "admin3", password: "12345", name: "test3", role: ["USER"]},
    {id: 4, login: "admin4", password: "12345", name: "test4", role: ["ADMIN"]},
    {id: 5, login: "admin5", password: "12345", name: "test5", role: ["CLIENT"]}
  ];

  constructor() {
  }

  findAll(): User[] {
    return this.users;
  }

  findByLogin(login: string): User {
    this.user = this.users.find(user => user.login == login);
    return
  }

  findByLoginAndPassword(login: string, password: string): User {
    this.user = this.findByLogin(login);
    if (this.user != null) {
      if (this.user.password = password) {
        return this.user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}

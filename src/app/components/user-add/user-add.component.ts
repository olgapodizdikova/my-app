import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  users: User[] = [];
  newUser: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser(): void {
    this.users.push(this.newUser);
    this.newUser = new User();

  }

}

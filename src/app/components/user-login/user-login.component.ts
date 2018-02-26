import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  newUser: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  sendMeUsers() {
    this.router.navigate(['userlist']);
  }

  login(login: string, password: string): void {
    if (this.userService.findByLoginAndPassword(login, password) != null) {
      this.sendMeUsers();
    }
  }
}

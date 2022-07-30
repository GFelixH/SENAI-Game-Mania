import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  constructor(private userService: UserService) {}

  //Initialize
  userInput: User = {
    email: '',
    password: '',
  };
  loginRequest(): void {
    console.log(this.userInput);
    this.userService
      .login(this.userInput)
      .subscribe((something) => console.log(something));
  }

  ngOnInit(): void {}
}

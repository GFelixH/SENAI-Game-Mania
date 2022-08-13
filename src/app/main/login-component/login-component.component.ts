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

  isGoodLogin: boolean = true;
  isNotEmpty: boolean = true;

  loginRequest(): void {
    let isPasswordValid: boolean = this.validPassword();
    let isUsernameValid: boolean = this.validUsername();

    if (isPasswordValid && isUsernameValid) {
      this.isNotEmpty = true;
      this.makeLogin();
    } else {
      this.isNotEmpty = false;
      throw new Error('Crenciais invalidas');

      //show error message
    }
  }

  makeLogin(): void {
    this.userService.login(this.userInput).subscribe({
      next: (msg) => {
        // redirect to user page
      },
      error: (e) => {
        this.badlogin(e);
      },
    });
  }
  ngOnInit(): void {}

  badlogin(e: Error): void {
    this.isGoodLogin = false;
    throw new Error('Crenciais invalidas ' + e.message);
  }

  validPassword(): boolean {
    const exp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/g;
    // const myRegex: RegExp = new RegExp(
    //   '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,12}$'
    // );
    let result = exp.test(this.userInput.password);
    return result;
  }

  validUsername(): boolean {
    if (this.userInput.email != '') return true;
    return false;
  }
}

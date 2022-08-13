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
    console.log(this.userInput);

    let isPasswordValid: boolean = this.validPassword();
    let isUsernameValid: boolean = this.validUsername();

    console.log('isPasswordValid value ' + isPasswordValid);

    if (isPasswordValid && isUsernameValid) {
      this.isNotEmpty = true;
      this.makeLogin();
    } else {
      this.isNotEmpty = false;
      console.log('\nCredential is NOT valid\n');
      //show error message
    }
  }

  makeLogin(): void {
    this.userService.login(this.userInput).subscribe({
      next: (msg) => {
        console.log('Login feito' + msg);
        // redirect to user page
      },
      error: (e) => {
        this.badlogin();
      },
    });
  }
  ngOnInit(): void {}

  badlogin(): void {
    this.isGoodLogin = false;
  }

  validPassword(): boolean {
    const exp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/g;
    // const myRegex: RegExp = new RegExp(
    //   '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,12}$'
    // );
    let result = exp.test(this.userInput.password);

    console.log(
      'teste password passa regex ' + this.userInput.password + ' ' + result
    );

    return result;
  }

  validUsername(): boolean {
    if (this.userInput.email != '') return true;
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/service/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public activeToast: boolean = true;

  constructor(private authorizationService: AuthorizationService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void { }

  logIn() {
    this.authorizationService.logIn(this.form.value)
      .then(() => {
        this.router.navigate(["pagePokemon"]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  inSignIn() {
    this.router.navigate(["sign-in"]);
  }

}

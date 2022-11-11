import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private authorizationService: AuthorizationService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void { }

  logIn() {
    if (this.form.valid) {
      this.authorizationService.logIn(this.form.value)
        .then(() => {
          this.router.navigate(["pagePokemon"]);
        })
        .catch(error => {
          alert(error);
        });
    } else {
      alert("Faltan datos");
    }

  }

  inSignIn() {
    this.router.navigate(["sign-in"]);
  }

}

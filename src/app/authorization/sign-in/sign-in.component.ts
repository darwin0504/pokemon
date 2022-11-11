import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { AuthorizationService } from '../../service/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;

  constructor(private authorizationService: AuthorizationService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void { }

  register() {
    this.authorizationService.signIn(this.form.value)
      .then(response => {
        this.router.navigate(["login"]);
      })
      .catch(error => { console.log(error) });
  }

  inLogIn() {
    this.router.navigate(["login"]);
  }

}

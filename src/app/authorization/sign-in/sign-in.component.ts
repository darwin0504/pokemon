import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private authorizationService: AuthorizationService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void { }

  register() {
    if (this.form.valid) {
      this.authorizationService.signIn(this.form.value)
        .then(response => {
          this.router.navigate(["login"]);
        })
        .catch(error => { alert(error) });
    } else {
      alert("Faltan datos");
    }
  }

  inLogIn() {
    this.router.navigate(["login"]);
  }

}

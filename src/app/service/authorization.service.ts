import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private auth: Auth) { }

  signIn({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logIn({ email, password }: any) {
    console.log(this.auth)
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

}

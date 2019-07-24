import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string;
  constructor(private router: Router){}

  registrujKorisnika(email:string, sifra:string){
    firebase.auth().createUserWithEmailAndPassword(email,sifra)
    .catch(
      (error) => console.log(error)
    )
  }

  prijaviKorisnika(email:string, sifra:string){
    firebase.auth().signInWithEmailAndPassword(email, sifra)
    .then(
      (response) => {
      this.router.navigate(['/'])
      firebase.auth().currentUser.getIdToken()
      .then(
        (token:string) => this.token = token
      )
      }
    )
    .catch(
      (error) => console.log(error)
    )
  }

  vratiToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
      (token:string) => this.token = token
    )
    return this.token;
  }
  prijavljen(){
    return this.token != null;
  }
  signout(){
  firebase.auth().signOut;
  this.token = null;
  this.router.navigate(['/signin'])
}
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dz-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
prijaviSe(form:NgForm){
const email = form.value.email;
const sifra = form.value.pass;
this.authService.prijaviKorisnika(email, sifra);
}
}

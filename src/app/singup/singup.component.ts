import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'dz-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registrujSe(form:NgForm){
    const email = form.value.email;
    const sifra = form.value.pass;
    this.authService.registrujKorisnika(email, sifra);
  }
} 
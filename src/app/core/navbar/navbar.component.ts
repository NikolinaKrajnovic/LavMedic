import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }
  signout(){
    this.authService.signout();
    this.router.navigate(['/signin']);
  }

}

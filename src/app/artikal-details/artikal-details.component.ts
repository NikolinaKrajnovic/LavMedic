import { Artikal } from './../core/artikal';
import { DomZdravljaService } from './../dom-zdravlja.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'dz-artikal-details',
  templateUrl: './artikal-details.component.html',
  styleUrls: ['./artikal-details.component.css']
})
export class ArtikalDetailsComponent implements OnInit {

  ovajArtikal: Artikal;
  subject = new Subject<any>();
  subscription = this.subject.asObservable();
  broj: number;
  korpa=[];


  constructor(private dz:DomZdravljaService , private router:Router, authService:AuthService) { 
    this.subscription= this.dz.getMessage();

    this.subscription.subscribe(message =>{
      console.log('poruka unutar detailsa componente', message);
      this.ovajArtikal = message;
    }) ;
    console.log('subscription',this.subscription);
    console.log('ovaj artikallll', this.ovajArtikal);
  }


  ngOnInit() {
  }
  staviUKorpu(proizvod){
    this.dz.dodajUKorpu(proizvod);
  }

}

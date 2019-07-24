import { ArtikalDetailsComponent } from './../artikal-details/artikal-details.component';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { DomZdravljaService } from '../dom-zdravlja.service';
import { Artikal } from '../core/artikal';

@Component({
  selector: 'dz-shop-cart',
  templateUrl: './shop-cart.component.html', 
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  korpa;

 total:number;
 porudzbina: Artikal [] = [];
  
  constructor(private dz:DomZdravljaService) { 
    this.korpa = this.dz.uzmiPredmete();
  }

  delete(i){
const index = this.korpa.indexOf(i);
this.korpa.splice(index,1);
  }

  ngOnInit() {

  }
  ukupnaCena(){
    this.total =0;
    for (let i = 0 ; i < this.porudzbina.length ; i++) {
      this.total += this.porudzbina[i].cena ; 
    }
  }
  check(){
    alert("Uspesno ste porucili");
  }

}

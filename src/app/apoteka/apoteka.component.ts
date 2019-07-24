import { DomZdravljaService } from './../dom-zdravlja.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'dz-apoteka',
  templateUrl: './apoteka.component.html',
  styleUrls: ['./apoteka.component.css']
})
export class ApotekaComponent implements OnInit {
  artikliNiz = [];
  constructor(private dz: DomZdravljaService, private router:Router) { }

get(){
  this.dz.getArtikal()
  .subscribe(
    (response) => {
      this.artikliNiz = response;
    },
    (error) => console.log(error)
  )
}

  ngOnInit() {
    this.get();
  }
  
  select(artikal){
   // console.log('artikal',artikal);
    setTimeout(() => {
      this.dz.sendMessage(artikal);
    },100);
    this.router.navigate(['/artikal'] );
  
  }

}

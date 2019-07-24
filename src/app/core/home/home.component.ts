import { Component, OnInit, ViewChild } from '@angular/core';
import { DomZdravljaService } from 'src/app/dom-zdravlja.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';




@Component({
  selector: 'dz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number = 45.2254364;
  lng: number = 19.8063578;
  artikliNiz = [];


  constructor(private dz: DomZdravljaService, private router:Router) { }
  
  vidiGaleriju(): void {
    this.router.navigate(['/galerija'])
  }
 
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
 about(){
   this.router.navigate(['/oNama'])
 }
  onSubmit(){
    alert("Forma uspesno poslata!")
  }

  onLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

}


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {
// Unit Features
  Rims='';
  backsplash='';
  endsplashright='';
  endsplashleft='';
  unitwidth='';
  unitlength='';
  deckheight='';
 // Sinks
 scrapsinklength='';
 scrapsinkwidth='';
 scrapsinkdepth='';
 scrapsinkdrainboard='';
 disposerunit=''; 
 //Faucets
 type='';
 quantity='';

 // next container
 ps='';
 voltage='';
 gen='';
 heater='';
 crossrails='';
 foottype='';
 drainballvalue='';
 dryingrack='';
 sheetpanrack='';

 utensilbasket='';
 chemicaldispenser='';
 dualtempering='';
 specialcrating='';
  constructor() { }

  ngOnInit(): void {
    this.data={
      Rims:'',
  backsplash:'',
  endsplashright:'',
  endsplashleft:'',
    }
  }
OnSubmit(){
  console.log("value")
}
data: any;
GetData(data: NgForm) {
  //this.dataObject = data;
  console.log(data);
}
}

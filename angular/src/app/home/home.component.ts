import { Component, OnInit } from '@angular/core';
import { KalimatiService } from '../services/kalimati.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    DATA = [];
    DATA1 = [];
  constructor(
    private kalimatiService: KalimatiService

  ) { }

  ngOnInit() {
      this.getData();
  }

  getData(){
      this.kalimatiService.getVegetablesfromService()
      .subscribe(
          data=>{this.DATA = data,console.log(data)},
          err=>console.log(err),
          ()=> console.log(this.DATA)
    );
    this.kalimatiService.getDataFromMLab()
    .subscribe(
        data=>{this.DATA1 = data},
        err=>console.log(err),
        ()=> console.log(this.DATA1)
    );
  }
 
}

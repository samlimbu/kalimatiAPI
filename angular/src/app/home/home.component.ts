import { Component, OnInit } from '@angular/core';
import { KalimatiService } from '../services/kalimati.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    DATA = [];
    DATE_TIME = {
        dateWR: [],
        timeWR: []

    };
  constructor(
    private kalimatiService: KalimatiService

  ) { }

  ngOnInit() {
      this.getDataRetail();
        this.getDateTime();
  }

  getDataRetail(){
      this.kalimatiService.getVegetablesfromService()
      .subscribe(
          data=>{this.DATA = data},
          err=>console.log(err),
          ()=> console.log()
    );
  
  }
  getDateTime(){
    this.kalimatiService.getDateTimeUpdate()
        .subscribe(
            data=> this.DATE_TIME = data,
            err => console.log(err),
            ()=> console.log(this.DATE_TIME, this.DATE_TIME.dateWR[1])
        )
  }
 
}

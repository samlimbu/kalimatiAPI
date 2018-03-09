import { Component, OnInit } from '@angular/core';
import { KalimatiService } from '../services/kalimati.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    DATA=[];
  constructor(
    private kalimatiService: KalimatiService

  ) { }

  ngOnInit() {
      this.getData();
  }

  getData(){
      this.kalimatiService.getVegetablesfromService()
      .subscribe(
          data=>console.log(data),
          err=>console.log(err),
          ()=> console.log(this.DATA)
    );
  }
}

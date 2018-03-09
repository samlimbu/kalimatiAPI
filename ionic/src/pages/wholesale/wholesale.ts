import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KalimatiProvider } from '../../providers/kalimati/kalimati';
@Component({
  selector: 'page-wholesale',
  templateUrl: 'wholesale.html'
})
export class WholesalePage {
    WHOLESALE_DATA; 
    DATE_TIME = {
      dateWR: [],
      timeWR: []
  
  };
    constructor(public navCtrl: NavController,
         private kalimatiProvider: KalimatiProvider
  ) {
  
    }
    ionViewWillEnter() {
      this.getRetailData();
    }
    getRetailData(){
        this.kalimatiProvider.getVegetablesfromServiceWholesale()
          .subscribe(
              data=>this.WHOLESALE_DATA = data,
              err=>console.log(err),
              ()=>console.log('data fetched')
          );
          this.kalimatiProvider.getDateTimeUpdate()
              .subscribe(
                  data=>this.DATE_TIME=data
              );
    }
    updateData(){
        this.getRetailData();
    }
  }
  
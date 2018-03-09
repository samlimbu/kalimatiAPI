import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
/*
  Generated class for the KalimatiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KalimatiProvider {
    url = 'https://kalimati-tarkari.herokuapp.com';
  constructor(public http: Http) {
    
  }

  getVegetablesfromService(){
    return this.http.get(this.url + '/retail')
    .map((response)=>{
        return response.json();
 
    });
  }
  getVegetablesfromServiceWholesale(){
    return this.http.get(this.url + '/wholesale')
    .map((response)=>{
        return response.json();
 
    });
  }
  getDateTimeUpdate(){
    return this.http.get(this.url + '/date')
    .map((response)=>{
        return response.json();
    });
  }
 
}

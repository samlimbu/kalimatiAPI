import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
@Injectable()
export class KalimatiService {
    url = 'https://kalimati-tarkari.herokuapp.com';
  constructor(private http: Http) { }

  getVegetablesfromService(){
    return this.http.get(this.url + '/retail')
    .map((response)=>{
        return response.json();
 
    });
  }
  getDataFromMLab(){
    return this.http.get('https://api.mlab.com/api/1/databases/samlimbu/collections/polls?apiKey=lXutACAwSvbZ_lgydrHKTyJA4duiL-iH')
    .map((response)=>{
        
       return response.json();
      
    })
  }
}

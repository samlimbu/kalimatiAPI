import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
@Injectable()
export class KalimatiService {
    url = 'https://kalimati-tarkari.herokuapp.com';
  constructor(private http: Http) { }

  getVegetablesfromService(){
    return this.http.get(this.url)
    .map(function(response){
        response.json();
        console.log(response);
    });
  }
}

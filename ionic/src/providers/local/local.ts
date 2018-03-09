import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
/*
  Generated class for the LocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalProvider {
    retail=[];
    wholesale=[];
    date=[];
    time=[];

  constructor(private storage: Storage) {
    console.log('Hello LocalProvider Provider');
  }
  addRetail(data) {
    this.retail = data;
    this.storage.set('retail', this.retail);
    console.log(this.retail.length);
  }

  addDateTime(date, time){
    this.date = date;
    this.time = time;
    this.storage.set('date', this.date);
    this.storage.set('time', this.time);
  }

  addWholesale(data) {
    this.wholesale = data;
    this.storage.set('wholesale', this.wholesale);
  }
  getRetailData() {
    return this.storage.get('retail')
        .then(
            (data)=>{
                this.retail = data == null? [] : data;
                return this.retail.slice();
            }
        );
    
  }
  getWholesaleData() {
    return this.storage.get('retail')
        .then(
            (data)=>{
                this.retail= data == null? [] : data;
                return this.retail.slice();
            }
        );
    
  }
  getDate(){
    return this.storage.get('date')
        .then(
            (data)=>{
                this.date= data == null? [] : data;
                return this.date.slice();
            }
        );
    
  }
  getTime(){
    return this.storage.get('time')
        .then(
            (data)=>{
                this.time= data == null? [] : data;
                return this.time.slice();
            }
        );
    
  }
}

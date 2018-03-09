import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KalimatiProvider } from '../../providers/kalimati/kalimati';
import { LocalProvider } from '../../providers/local/local';
import { date_time } from '../../models/date_time';
@Component({
    selector: 'page-retail',
    templateUrl: 'retail.html'
})
export class RetailPage {
    RETAIL_DATA = [];
    DATE_TIME = {
        dateWR: [],
        timeWR: []
    };


    constructor(public navCtrl: NavController,
        private kalimatiProvider: KalimatiProvider,
        private localProvider: LocalProvider
    ) {

    }
    ionViewWillEnter() {
        this.getRetailData();
    }
    getRetailData() {
        this.localProvider.getRetailData()
            .then(
                data => {
                    this.RETAIL_DATA = data,
                        console.log(this.RETAIL_DATA.length),
                        this.check()
                }
            )


    }
    check() {
        //check local storage
        if (this.RETAIL_DATA.length <= 0) {

            this.updateData();
        } else {
            this.localProvider.getRetailData()
                .then(
                    data => [
                        this.RETAIL_DATA = data,
                        console.log(this.RETAIL_DATA.length)
                    ]
                );

            this.localProvider.getTime()
                .then(
                    data => this.DATE_TIME.timeWR = data
                );
        }
        this.localProvider.getDate()
            .then(
                data => this.DATE_TIME.dateWR = data
            );
    }



    updateData() {
        //get new data
        this.kalimatiProvider.getVegetablesfromService()
            .subscribe(
                data => {
                    this.RETAIL_DATA = data,
                        this.localProvider.addRetail(this.RETAIL_DATA)
                },
                err => console.log(err),
                () => console.log(this.RETAIL_DATA.length)
            );
        this.kalimatiProvider.getDateTimeUpdate()
            .subscribe(
                data => {
                    this.DATE_TIME = data,
                        this.localProvider.addDateTime(data.dateWR, data.timeWR);
                }
            );
        //save new data to local storage



    }
}

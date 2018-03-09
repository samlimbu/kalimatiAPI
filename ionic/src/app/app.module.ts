import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { WholesalePage } from '../pages/wholesale/wholesale';
import { RetailPage } from '../pages/retail/retail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpModule} from '@angular/http';
import { KalimatiProvider } from '../providers/kalimati/kalimati';
import { LocalProvider } from '../providers/local/local';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WholesalePage,
    RetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WholesalePage,
    RetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KalimatiProvider,
    LocalProvider
  ]
})
export class AppModule {}

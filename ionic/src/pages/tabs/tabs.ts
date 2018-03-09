import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { WholesalePage } from '../wholesale/wholesale';
import { RetailPage } from '../retail/retail';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RetailPage;
  tab2Root = WholesalePage;
  tab3Root = AboutPage;

  constructor() {

  }
}

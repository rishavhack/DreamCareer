import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = NewsPage;
  tab4Root = ContactPage;


  constructor() {

  }
    swipeEvent(e) 
  {
   console.log(e);
     /* if(e.direction == 2)
      {
          this.app.getRootNav().getActiveChildNav().select(selectedTab + 1);        
      }
      else if(e.direction == 4)
      {
          this.app.getRootNav().getActiveChildNav().select(selectedTab - 1);        
      }*/
    }

}

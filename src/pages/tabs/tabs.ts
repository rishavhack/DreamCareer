import { Component,ViewChild } from '@angular/core';
import { Tabs } from "ionic-angular";
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild("myTabs") myTabs: Tabs;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = NewsPage;
  tab4Root = ContactPage;
  check=0


  constructor() {

  }
  //   swipeEvent(e) 
  // {
  //   console.log(this.myTabs.select);
  //     if(e.direction == 2)
  //     {
  //         this.myTabs.select(1);
  //          this.app.getRootNav().getActiveChildNav().select(selectedTab + 1);      
  //      }
  //      else if(e.direction == 4)
  //      {
  //         this.app.getRootNav().getActiveChildNav().select(selectedTab - 1)
  //      }
  //   }
sendIndex(){
    this.check=0;
  }
  sendIndex1(){
   this.check=1;
  }
  sendIndex2(){
    this.check=2;
  }
  sendIndex3(){
    this.check=3;
  }

  swipeEvent(e) 
  {

    console.log(this.check);
    if(e.direction ==2 && this.check == 0)
    {
     this.check=1;
     this.myTabs.select(1);
    }
    else if(e.direction == 2 && this.check == 1 )
    {
      this.check=2;
      this.myTabs.select(2);
    }
    else if(e.direction == 2 && this.check == 2)
    {
      this.check=3;
      this.myTabs.select(3);
    }
    else if(e.direction == 4 && this.check == 3)
    {
      this.check=2;
      this.myTabs.select(2);
    }
    else if(e.direction == 4 && this.check == 2)
    {
      this.check=1;
      this.myTabs.select(1);
    }
    else if(e.direction == 4 && this.check == 1)
    {
      this.check=0;
      this.myTabs.select(0);
    }
   
  
}
   
}

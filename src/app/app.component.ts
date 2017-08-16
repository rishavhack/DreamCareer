import { Component,ViewChild } from '@angular/core';
import { Platform,Nav ,App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { FaqPage } from '../pages/faq/faq';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  public rootPage:any ;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public appCtrl: App) {

   
      var config = {
    apiKey: "AIzaSyDAaE7s5uZFHSW71i0CT0lbELwXWilRVz8",
    authDomain: "quiz-app-3759d.firebaseapp.com",
    databaseURL: "https://quiz-app-3759d.firebaseio.com",
    projectId: "quiz-app-3759d",
    storageBucket: "quiz-app-3759d.appspot.com",
    messagingSenderId: "55436514958"
  };
  firebase.initializeApp(config);
   firebase.auth().onAuthStateChanged((user)=>{

     if(user)
     {
       this.rootPage = TabsPage;
     }
     else
     {
       this.rootPage = LoginPage;
     }

   });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  navigateToFAQ()
  {
    this.nav.push(FaqPage);
  }
  navigateToAboutUS()
  {
    this.nav.push(AboutusPage);
  }
  navigateToHome()
  {
    this.nav.push(TabsPage);
  }
  navigateToChat()
  {
    this.nav.push(ChatPage);
  }
  navigateToLoginPage()
  {
    this.appCtrl.getRootNav().push(HomePage, {
      text: 'logout'
  });
  }
  
}

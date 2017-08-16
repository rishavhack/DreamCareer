import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QuizPage }from '../pages/quiz/quiz';
import { NewslistPage } from '../pages/newslist/newslist'; 

import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NewsPage } from '../pages/news/news';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireModule } from 'angularfire2';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { FaqPage } from '../pages/faq/faq';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserDetailProvider } from '../providers/user-detail/user-detail';

export const firebaseConfig = {
    apiKey: "AIzaSyDAaE7s5uZFHSW71i0CT0lbELwXWilRVz8",
    authDomain: "quiz-app-3759d.firebaseapp.com",
    databaseURL: "https://quiz-app-3759d.firebaseio.com",
    projectId: "quiz-app-3759d",
    storageBucket: "quiz-app-3759d.appspot.com",
    messagingSenderId: "55436514958"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ChatPage,
    QuizPage,
    NewsPage,
    NewslistPage,
    AboutusPage,
    FaqPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ChatPage,
    QuizPage,
    NewsPage,
    NewslistPage,
    AboutusPage,
    FaqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    UserDetailProvider,
    Camera
  ],
  
})
export class AppModule {}

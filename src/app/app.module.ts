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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NewsPage } from '../pages/news/news';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    NewslistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
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
    NewslistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ],
  
})
export class AppModule {}
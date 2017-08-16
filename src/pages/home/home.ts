import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';
import { ChatPage } from '../chat/chat';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[UserServiceProvider]
})
export class HomePage {
  public newfeed :any;
  public callLogout

  constructor(public navCtrl: NavController, public navParams: NavParams,private usersService : UserServiceProvider,
      public appCtrl: App,public http: Http) {
    this.callLogout = this.navParams.get('text');
    if(this.callLogout == 'logout')
    {
      this.logUserOut();
    }

  }
   logUserOut()
  {
  	this.usersService.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }
  chatBot()
  {
    this.appCtrl.getRootNav().push(ChatPage);
  }

}

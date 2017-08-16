import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
	public chatInput : any;
	public chatNumber : any;
	chats = [];
  public image = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  enterMessage(txt)
  {
    this.image = false;
  	this.chats.push({text:txt,num:1});
    console.log(this.chats);
    this.callCallBot();
  }
  callCallBot()
  {
   var message =this.chatInput;
  var base = "&session=8gtyf8&key=fd69502aef7ef5c78079a188a71ee83d&from=yhg87";
  this.chatInput = '';
     this.http.get('https://api.motion.ai/1.0/messageBot?bot=69021&msg=;'+message+base).map(res => res.json()).subscribe(data => {
        
      this.chats.push({text :data.botResponse,num:0});
      console.log(this.chats);
    
    });
  }
}

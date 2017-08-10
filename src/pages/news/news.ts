import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { NewslistPage } from '../newslist/newslist';


/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  gotoNewsList(txt)
  {
  	this.appCtrl.getRootNav().push(NewslistPage, {
	    newsName: txt
	});
  }

}

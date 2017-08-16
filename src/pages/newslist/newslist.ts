import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the NewslistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newslist',
  templateUrl: 'newslist.html',
})
export class NewslistPage {
	public channelName :any;
    public newfeed :any;


  constructor(public loadingController: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  	this.channelName = this.navParams.get('newsName');
  		let loader = this.loadingController.create({
      spinner: 'bubbles',
    content: 'Loading Please Wait...'
    });  
  		loader.present();
    var key ="4403fa0143cd4ed0a99129706f2da600";
    if(this.channelName == 'toi')
    {
    	this.http.get('https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey='+key).map(res => res.json()).subscribe(data => {
        this.newfeed=data.articles;
        loader.dismiss();
   	    });
    }
    else if(this.channelName == 'th')
    {
    	this.http.get('https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey='+key).map(res => res.json()).subscribe(data => {
        this.newfeed=data.articles;
        loader.dismiss();
   	    });
    }
    else if(this.channelName == 'mtv')
    {
    	this.http.get('https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey='+key).map(res => res.json()).subscribe(data => {
        this.newfeed=data.articles;
        loader.dismiss();
   	    });
    }
    else if(this.channelName == 'hack')
    {
    	this.http.get('https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey='+key).map(res => res.json()).subscribe(data => {
        this.newfeed=data.articles;
        loader.dismiss();
   	    });
    }
    else if(this.channelName == 'espn')
    {
    	this.http.get('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey='+key).map(res => res.json()).subscribe(data => {
        this.newfeed=data.articles;
        loader.dismiss();
   	    });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslistPage');
  }

}

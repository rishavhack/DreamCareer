import { Component } from '@angular/core';
import { NavController,App,LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Http } from '@angular/http';
import { QuizPage } from '../quiz/quiz';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public subjectList : any;
  constructor(public loadingController: LoadingController,public navCtrl: NavController,public http: Http,db: AngularFireDatabase,public appCtrl: App) 
  {

  	let loader = this.loadingController.create({
      spinner: 'bubbles',
    content: 'Loading Please Wait...'
    });  

	loader.present();
  	db.list('/subjectList')
		.subscribe(data => {
			this.subjectList = data;
		    console.log("Data is : ",data);

		loader.dismiss();
		},
		(ex) => {
		   console.log('Found exception: ', ex);

		loader.dismiss();
		});
	}
	getSubjectList(txt)
	{
		this.appCtrl.getRootNav().push(QuizPage, {
	    subjectName: txt
	});
	}
	  /*getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.subjectList = this.subjectList.filter((item) => {
        return (item.lists.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/
}

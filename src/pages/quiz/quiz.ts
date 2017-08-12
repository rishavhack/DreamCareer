import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the QuizPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
	public subjectName :any;
	public questionList;
	public optionNumber :any;
	public number :any;
	public rightAnswer = 0;
	public wrongAnswer = 0;
	public totalQuestion :any;
	public showResult = true;

  constructor(public loadingController: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http,db: AngularFireDatabase) {
  		this.number = 0;
  		let loader = this.loadingController.create({
      spinner: 'bubbles',
    content: 'Loading Please Wait...'
    });  

	loader.present();
  		this.subjectName = this.navParams.get('subjectName');
  			db.list(this.subjectName)
		.subscribe(data => {
			this.questionList = data;
			this.totalQuestion = this.questionList.length;
		loader.dismiss();
		},
		(ex) => {
		   console.log('Found exception: ', ex);
		   
		loader.dismiss();
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }
  nextQuestion(txt)
  {
  	if(txt != "")
  	{
	  	if(txt == this.questionList[this.number].answer)
	  	{
	  		this.rightAnswer++
	  	}
	  	else
	  	{
	  		this.wrongAnswer++;
	  	}

	  	this.number++;
	  	console.log(this.number);
	  	this.optionNumber='';
	  	this.resultOfQuiz();
  	}
  	else
  	{
  		return;
  	}
  }
  resultOfQuiz()
  {
  	if(this.number == this.totalQuestion)
  	{
  		this.showResult = false;
  	}
  }

}

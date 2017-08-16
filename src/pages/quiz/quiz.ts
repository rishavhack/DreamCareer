import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,App } from 'ionic-angular';
import * as firebase from 'firebase';
import { Http } from '@angular/http';
import { UserDetailProvider } from '../../providers/user-detail/user-detail';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';

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
  providers:[UserDetailProvider]
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

  constructor(public app: App,private userDetail : UserDetailProvider,public loadingController: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http,db: AngularFireDatabase) {
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
  submitResult()
  {

  	/*let perCentage = this.rightAnswer/this.totalQuestion * 100;
  	console.log(perCentage);
  	this.userDetail.saveResult(this.subjectName,perCentage).then(auth=>{
		console.log("Succesful");
		},error=>{
		console.log(error);
	});*/let nav = this.app.getRootNav(); 
	nav.setRoot(TabsPage, {tabIndex: 2});
  }

}

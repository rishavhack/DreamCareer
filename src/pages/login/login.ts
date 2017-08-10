import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams, ModalController,LoadingController,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserServiceProvider } from '../../providers/user-service/user-service'; 
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UserServiceProvider]
})
export class LoginPage {
		public emailField : any;
	public passwordField : any;
	private users = [];
	private usersList : any;

  constructor(private toastCtrl : ToastController, private alertCtrl: AlertController, private loadingCtrl :LoadingController, public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController,private usersService : UserServiceProvider) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submitLogin()
  {
      let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
    content: 'Loading Please Wait...'
    }); 

  loader.present(); 
  	this.usersService.loginUser(this.emailField, this.passwordField).then(authData=>{
  		this.navCtrl.setRoot(HomePage);
      loader.dismiss();
  	},error=>{
  		let alert = this.alertCtrl.create({
  			title :'Error Loggin in',
  			subTitle : error.message,
  			buttons:['Ok']
  		});
      alert.present();
      loader.dismiss();
  	});
  	
  }
  signUserUp()
  {
  	this.usersService.signUpUser(this.emailField, this.passwordField).then(authData=>{
  		this.navCtrl.setRoot(HomePage);
  	},error=>{
  		alert("Error Logging")
  	});
  	let loader = this.loadingCtrl.create({
  		dismissOnPageChange:true,
  	});
  	loader.present();
  }
    googleSignIn()
  {
    this.usersService.googleSignInUser().then(()=>{
      let toast = this.toastCtrl.create({
        message : 'User account create successfully..',
        duration :3000
      });
      toast.present();
    });
  }
  showForgotPassword()
  {
    let prompt = this.alertCtrl.create({
       title:'Enter Your Email',
       message:'A new password will be send to you',
       inputs:
       [
         {
            name : 'recoverEmail',
            placeholder : 'Email'
         },
       ],
       buttons:
       [
         {
           text:'Cancel',
           handler:data=>
           {
             console.log('Cancel Clicked');
           }
         },
         {
           text:'Submit',
           handler:data=>
           {
             let loader = this.loadingCtrl.create({
              dismissOnPageChange:true,
              content:'Reseting your password..' 
                });
             loader.present();

             console.log(data.recoverEmail)
             //call user Service
             this.usersService.forgotPasswordUser(data.recoverEmail).then(()=>{
               //add Toast
               loader.dismiss().then(()=>{
                 //show pop up
                 let alert = this.alertCtrl.create({
                 title : 'Check Your Email',
                 subTitle : 'Password reset Successful',
                 buttons:['OK']
               });
               alert.present();

               })
             },error=>{
               loader.dismiss().then(()=>{
               let alert = this.alertCtrl.create({
                 title : 'Error Loggin in',
                 subTitle : error.message,
                 buttons:['OK']
               });
               alert.present();
               })
             });
           }
         }
       ]        
    });
    prompt.present()
  }
}
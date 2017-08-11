import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service'; 

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[UserServiceProvider]
})
export class ContactPage {
	public name :any;

  constructor(public navCtrl: NavController,private usersService : UserServiceProvider) {

  }
submit(txt)
{
	this.usersService.submitDetail(txt).then(auth=>{
		console.log("Succesful");
		},error=>{
		console.log(error);
	});
}
 
}

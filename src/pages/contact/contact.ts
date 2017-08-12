import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { UserDetailProvider } from '../../providers/user-detail/user-detail'; 
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[UserDetailProvider]
})
export class ContactPage {
	public firstName :any;
	public lastName :any;
	public phoneNumber :any;
	public email :any;
	public photoUrl :any;


  constructor(private camera: Camera,public navCtrl: NavController,private userDetail : UserDetailProvider,private loadingCtrl :LoadingController) {
  	 var uidKey = firebase.auth().currentUser.uid;
  	this.displayView(uidKey);
  }
updateProfile()
{
	this.userDetail.submitDetail(this.firstName,this.lastName,this.phoneNumber).then(auth=>{
		console.log("Succesful");
		},error=>{
		console.log(error);
	});
}
 displayView(uid)
 {
 let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
    content: 'Loading Please Wait...'
    }); 

  loader.present(); 
 	this.userDetail.viewDetail(uid).then(auth=>{
		this.firstName =auth.val().name.first;
		this.lastName =auth.val().name.last;
		this.phoneNumber = auth.val().phoneNumber;
		this.photoUrl =auth.val().photo;
		  loader.dismiss();
		},error=>{
		console.log(error);
		  loader.dismiss();
	});
 }
 uploadPhoto()
 {
	 const options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

	this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64:
	 this.photoUrl = 'data:image/jpeg;base64,' + imageData;
	 this.upload();
	}, (err) => {
	 console.log(err)
	});
 }
 upload() {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
    content: 'Uploading Image Wait...'
    }); 

  loader.present(); 
    imageRef.putString(this.photoUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
     this.photoUrl = snapshot.downloadURL;
     this.updateProfilePic(this.photoUrl);
     console.log("Successful");

		  loader.dismiss();
    });

  }
  updateProfilePic(url)
  {
  	this.userDetail.updateProfile(url).then(auth=>{
		console.log("Succesful");
		},error=>{
		console.log(error);
	});
  }
}

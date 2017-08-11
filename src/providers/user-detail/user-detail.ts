import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserDetailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserDetailProvider {

  public fireAuth : any;
  public userProfile : any;
  public uidKey :any
  public emailFire :any
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
  	this.userProfile = firebase.database().ref('users');
    this.uidKey = firebase.auth().currentUser.uid;
    this.emailFire = firebase.auth().currentUser.email;
  }
  submitDetail(first,last,phoneNumber,email)
  {
    return this.userProfile.child(this.uidKey).update({
          name:{
                first : first,
                last: last,
                },
          email:email,
          phoneNumber:phoneNumber,
        });
  }
  viewDetail(uid)
  {
  	var userRef = this.userProfile.child(uid);
  		return userRef.once('value');
  }
  updateProfile(url)
  {
    return this.userProfile.child(this.uidKey).update({
          photo:url,
        });
  }

}

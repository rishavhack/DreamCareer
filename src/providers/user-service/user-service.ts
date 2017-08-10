import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
	private data : any;
	public fireAuth : any;
	public userProfile : any;

  constructor(public http: Http) {
  	this.fireAuth = firebase.auth();
  	this.userProfile = firebase.database().ref('users');
  }
  googleSignInUser()
  {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    var that =this;
    return firebase.auth().signInWithPopup(provider).then(function(result){

      if(result.user)
      {
        console.log(result);
        var user = result.user;
        var res = result.user.displayName.split(" ");

        that.userProfile.child(user.uid).set({
          email : user.email,
          photo : user.photoURL,
          username : user.displayName,
          name:{
                first : res[0],
                middle: res[1],
                },
        });
      }
    }).catch(function(error){
      console.log(error);
    });
  }
  signUpUser(email :string , password:string)
  {
  	return this.fireAuth.createUserWithEmailAndPassword(email,password).
  	then((newUser)=>{
  		//sign in the user
  		this.fireAuth.signInWithEmailAndPassword(email,password).then((authenticatedUser)=>{
  			//successful login,create user profile
  			this.userProfile.child(authenticatedUser.uid).set({
  				email:email
  			})
  		})
  	})
  }
  loginUser(email:string,password:string):any{
  	return this.fireAuth.signInWithEmailAndPassword(email,password);
  }
  forgotPasswordUser(email:any){
    return this.fireAuth.sendPasswordResetEmail(email);
  }
  logoutUser(){
  	return this.fireAuth.signOut();
  }
}

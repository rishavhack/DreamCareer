var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserServiceProvider = (function () {
    function UserServiceProvider(http) {
        this.http = http;
        this.fireAuth = firebase.auth();
        this.userProfile = firebase.database().ref('users');
    }
    UserServiceProvider.prototype.googleSignInUser = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        var that = this;
        return firebase.auth().signInWithPopup(provider).then(function (result) {
            if (result.user) {
                console.log(result);
                var user = result.user;
                var res = result.user.displayName.split(" ");
                that.userProfile.child(user.uid).set({
                    email: user.email,
                    photo: user.photoURL,
                    username: user.displayName,
                    name: {
                        first: res[0],
                        middle: res[1],
                    },
                });
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    UserServiceProvider.prototype.signUpUser = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).
            then(function (newUser) {
            //sign in the user
            _this.fireAuth.signInWithEmailAndPassword(email, password).then(function (authenticatedUser) {
                //successful login,create user profile
                _this.userProfile.child(authenticatedUser.uid).set({
                    email: email
                });
            });
        });
    };
    UserServiceProvider.prototype.loginUser = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    UserServiceProvider.prototype.forgotPasswordUser = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    return UserServiceProvider;
}());
UserServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserServiceProvider);
export { UserServiceProvider };
//# sourceMappingURL=user-service.js.map
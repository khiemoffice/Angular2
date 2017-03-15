import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  status:any;
  registerCredentials = {email: '', password: ''};
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}
 
  public createAccount() {
   
  }
 
  public login() {
    this.status = 'processing';
    setTimeout(()=>{
      this.status = 'success';
    },1000)

    setTimeout(()=>{
       this.nav.setRoot(HomePage)
    },2000)
   
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        
        this.nav.setRoot(HomePage)
        });
      } else {
        //this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
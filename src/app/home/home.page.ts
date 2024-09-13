import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public router : Router) {}

  email: string = '';
  nome: string = '';
  message: string = '';
  secretKey: string = 'AlexIncrivel';
  encryptedMessage: string = '';
  encryptedEmail: string = '';
  encryptedName: string = '';


  sendData(){
    if (this.message && this.secretKey) {
      const encryptedM = CryptoJS.AES.encrypt(this.message, this.secretKey).toString();
      this.encryptedMessage = encryptedM;
      const encryptedE = CryptoJS.AES.encrypt(this.email, this.secretKey).toString();
      this.encryptedEmail = encryptedE;
      const encryptedN = CryptoJS.AES.encrypt(this.nome, this.secretKey).toString();
      this.encryptedName = encryptedN;
    }
    if(this.encryptedMessage){
      const encodedMessage = encodeURIComponent(this.encryptedMessage);
      const encodedEmail = encodeURIComponent(this.encryptedEmail);
      const encodedName = encodeURIComponent(this.encryptedName);
      this.router.navigateByUrl
      (`/tela2/${encodedMessage}/${encodedEmail}/${encodedName}`);
    }
  }
}

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

  email: string = ''
  nome: string = ''
  message: string = '';
  secretKey: string = 'skibidigragas';
  encryptedMessage: string = '';
  encryptedKey: string = '';

  encryptMessage() {
    if (this.message && this.secretKey) {
      const encrypted = CryptoJS.AES.encrypt(this.message, this.secretKey).toString();
      this.encryptedMessage = encrypted;
    }
  }

  sendData(){
    this.router.navigateByUrl
    (`/tela2/${this.encryptMessage}`)
  }

}

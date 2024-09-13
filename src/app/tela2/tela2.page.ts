import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {

  encryptedMessage:any;
  encryptedEmail:any;
  encryptedName:any;
  secretKey: string = '';
  decryptedMessage: string = '';
  decryptedEmail: string = '';
  decryptedName: string = '';

  constructor( private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.encryptedMessage = this.activatedRoute.snapshot.paramMap.get('encryptedMessage');
    this.encryptedEmail = this.activatedRoute.snapshot.paramMap.get('encryptedEmail');
    this.encryptedName = this.activatedRoute.snapshot.paramMap.get('encryptedName');
  }
  decrypt(){
    if (this.encryptedMessage && this.secretKey) {
      const bytesM = CryptoJS.AES.decrypt(this.encryptedMessage, this.secretKey);
      const decryptedM = bytesM.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage = decryptedM;

      const bytesE = CryptoJS.AES.decrypt(this.encryptedEmail, this.secretKey);
      const decryptedE = bytesE.toString(CryptoJS.enc.Utf8);
      this.decryptedEmail = decryptedE;

      const bytesN = CryptoJS.AES.decrypt(this.encryptedName, this.secretKey);
      const decryptedN = bytesN.toString(CryptoJS.enc.Utf8);
      this.decryptedName = decryptedN;
    }
    return this.decryptedMessage
    return this.decryptedEmail
    return this.decryptedName
  }
}

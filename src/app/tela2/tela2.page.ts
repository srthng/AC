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
  secretKey: string = '';
  decryptedMessage: string = '';

  constructor( private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.encryptedMessage = this.activatedRoute.snapshot.paramMap.get('encryptedMessage');
  }
  decrypt(){
    if (this.encryptedMessage && this.secretKey) {
      const bytes = CryptoJS.AES.decrypt(this.encryptedMessage, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage = decrypted;
    }
    return this.decryptedMessage
  }
}

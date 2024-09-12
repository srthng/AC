import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {

  encryptedMessage:any;

  constructor( private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.encryptedMessage = this.activatedRoute.snapshot.paramMap.get('encryptedMessage');
  }

}

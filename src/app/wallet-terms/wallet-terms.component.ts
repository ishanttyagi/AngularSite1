import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-terms',
  templateUrl: './wallet-terms.component.html',
  styleUrls: ['./wallet-terms.component.css']
})
export class WalletTermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}

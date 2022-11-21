import { Component, OnInit } from '@angular/core';
import{pri} from '../helpers/Common'
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  privacy = pri;

}

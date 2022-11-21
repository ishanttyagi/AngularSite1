import { Component, OnInit } from '@angular/core';
import { services } from '../helpers/Common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  service= services;
}

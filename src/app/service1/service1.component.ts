import { Component, OnInit, Input } from '@angular/core';
import { services2 } from '../helpers/Common';
@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  service1= services2;
}

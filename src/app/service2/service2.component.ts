import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  @Input() service1:any;
  constructor() { }

  ngOnInit(): void {
  }
}

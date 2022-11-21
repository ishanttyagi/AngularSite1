import { Component, OnInit ,Input } from '@angular/core';
import { services } from '../helpers/Common';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  // @Input() service:any;
  constructor() { }

  ngOnInit(): void {
    // console.warn(this.service);
    window.scrollTo(0,0);
  }

  service= services;
}

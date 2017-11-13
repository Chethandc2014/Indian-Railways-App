import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  bsConfig:Partial<BsDatepickerConfig>;
  ngOnInit() {
   this.bsConfig=Object.assign({},{containerClass:'theme-default'});
  }
  public dateOfJourney:Date=new Date();
  
   
}

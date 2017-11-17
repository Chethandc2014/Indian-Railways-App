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
  tabs:any[]=[];
  ngOnInit() {
   this.bsConfig=Object.assign({},{containerClass:'theme-default'});
  }
  public dateOfJourney:Date=new Date();

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      removable: true
    });
  };

  
  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
   // console.log('Remove Tab handler');
  }




  
   
}

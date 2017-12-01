import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { ChangeDetectionStrategy } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-homepage',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  

  bsConfig:Partial<BsDatepickerConfig>;
  tabs:any[]=[];
  showDropdownMenu:boolean=false;
  
  constructor(private renderer:Renderer2){
  }
 
  @ViewChild('dp') dropdwon:ElementRef;

  ngOnInit() {
   this.bsConfig=Object.assign({},{containerClass:'theme-default'});
   this.renderer.listen('window','click',(event)=>{
     console.log(event);
      if(!event.target.attributes.hasOwnProperty('bsdatepickerdaydecorator')){
        this.renderer.removeClass(this.dropdwon.nativeElement,'showMenu');
      }
      
   });
  }
  public dateOfJourney:Date=new Date();

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: "Tab "+newTabIndex,
      content: "Dynamic content ${newTabIndex}",
      disabled: false,
      removable: true,
      active:true
    });
  };

  
  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
   // console.log('Remove Tab handler');
  }
  
  opensearchMenu():void{
    if(this.showDropdownMenu){
      this.showDropdownMenu=false;
    }else{
      this.showDropdownMenu=true;
    }
  }

  



  
   
}

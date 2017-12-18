import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { ChangeDetectionStrategy } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { SearchResultComponent } from 'app/search-result/search-result.component';
import { LoginComponent } from 'app/login/login.component';


@Component({
  selector: 'app-homepage',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  showDropdownMenu:boolean=false;
  tabs:any[]=[];  
  @ViewChild('dp') dropdwon:ElementRef;

  @ViewChild('container',{read:ViewContainerRef})  container;


  constructor(private renderer:Renderer2,private resolver:ComponentFactoryResolver){

  }

  ngOnInit() {

    this.renderer.listen('window','click',(event)=>{
        if(!event.target.attributes.hasOwnProperty('bsdatepickerdaydecorator')){
          this.renderer.removeClass(this.dropdwon.nativeElement,'showMenu');
        }
     });
  
  }
 
  addNewTab(tabData:any):void{
    const newTabIndex = this.tabs.length + 1;
  
    this.tabs.push({
      title: "Tab "+newTabIndex,
      content: "Test Tab Value",
      disabled: false,
      removable: true,
      active:true,
      component:tabData.component,
      searchData:tabData.searchData
    });
  };

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
  opensearchMenu():void{
    if(this.showDropdownMenu){
      this.showDropdownMenu=false;
    }else{
      this.showDropdownMenu=true;
    }
  }
  
}

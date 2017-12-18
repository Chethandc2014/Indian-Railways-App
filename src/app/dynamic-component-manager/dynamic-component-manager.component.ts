import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { ComponentBinderDirective } from 'app/directives/component-binder.directive';
import { ComponentFactoryResolver } from '@angular/core';
import { AfterContentInit } from '@angular/core';

@Component({
  selector: '[app-dynamic-component-manager]',
  template: '<ng-template component-Binder> </ng-template>'
})
export class DynamicComponentManagerComponent implements AfterContentInit {

  @Input() component:any; 
  @Input() searchData:{};

  @ViewChild(ComponentBinderDirective) container:ComponentBinderDirective;
  
    constructor(private resolver:ComponentFactoryResolver) {
     
    }
    
   ngAfterContentInit(){   
    let componentFactory=this.resolver.resolveComponentFactory(this.component);
    let containerRef= this.container.viewContainerRef;
    let componentRef=containerRef.createComponent(componentFactory);
   // componentRef.instance['searchData']=this.searchData;
     // (<SearchResultComponent>componentRef.instance).myName='Chethan '+this.count++;
    }
}

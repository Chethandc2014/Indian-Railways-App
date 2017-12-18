import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component-Binder]'
})
export class ComponentBinderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

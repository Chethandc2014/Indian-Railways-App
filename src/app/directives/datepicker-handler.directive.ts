import { Directive } from '@angular/core';

@Directive({
  selector: 'bs-datepicker',
  host:{
    '(click)':'onClick($event)'
  }
})
export class DatepickerHandlerDirective {

  constructor() { }

  onClick(event:any):void{
    event.stopPropagation();
  }
}

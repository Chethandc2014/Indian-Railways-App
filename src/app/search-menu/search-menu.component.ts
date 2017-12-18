import { Component, OnInit} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchResultComponent } from 'app/search-result/search-result.component';
import { LoginComponent } from 'app/login/login.component';


@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  bsConfig:Partial<BsDatepickerConfig>;
  
  public dateOfJourney:Date=new Date();

  @Output() addNewTabEmitter=new EventEmitter<object>();

  constructor(){
  }
  ngOnInit() {
    this.bsConfig=Object.assign({},{containerClass:'theme-default'});
  } 

  addNewTab():void{
   this.addNewTabEmitter.emit({'component':SearchResultComponent,'searchData':{'dataOfJourney':this.dateOfJourney}});
  }
}

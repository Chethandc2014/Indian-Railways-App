import { Component, OnInit} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchResultComponent } from 'app/search-result/search-result.component';
import { LoginComponent } from 'app/login/login.component';
import { Search } from 'app/models/search';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';


@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  bsConfig:Partial<BsDatepickerConfig>;
  
  public search:Search=new Search();
  @Output() addNewTabEmitter=new EventEmitter<object>();

  constructor(private http:Http){
  }
  ngOnInit() {
    this.bsConfig=Object.assign({},{containerClass:'theme-default',dateInputFormat:'DD-MM-YYYY'});
    
  } 


  searchData():void{

   let urlParams=new URLSearchParams();
   //let httpPram=new HttpParams();

   let dateOfJourney=this.search.dateOfJourney.getDate()
                    +"/"+(this.search.dateOfJourney.getMonth()+1)
                    +"/"+this.search.dateOfJourney.getFullYear();
   urlParams.set('sourceStn',this.search.sourceStn);
   urlParams.set('destinationStn',this.search.destinationStn);
   urlParams.set('dateOfJourney',dateOfJourney);
   let header=new Headers({'Content-Type':'application/json'});

   //httpPram.set('sourceStn',this.search.sourceStn);
   //httpPram.set('destinationStn',this.search.destinationStn);
   //httpPram.set('dateOfJourney',this.search.dateOfJourney.toDateString());

  let options=new RequestOptions({headers:header,params:urlParams});
    this.http.get("http://localhost:8000/IndianRailways/app/passangerCtrl/search",options).subscribe(response=>{//No bracket required for one parameter in arrow function
      console.log(response.json());
     if(response.status==200){

      let rawResponse=response.json();
      let jsonResponse=JSON.parse(rawResponse['response']);
      let tranList=jsonResponse.trainList;
      this.addNewTab(tranList);
     }else{
       //NoData or Server Issue...
     }
    })
  }

  addNewTab(searchResult:Array<Object>):void{
    //this.searchData();
   this.addNewTabEmitter.emit({'component':SearchResultComponent,'searchData':searchResult});
  }
}

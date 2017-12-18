import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private http:Http) { 

  }
  myName:string='My Name';
  searchData:any;
  trainList=[
    {name:'Janshtabdi',id:'1231',arrTime:'10.10AM',depTime:'10.30AM'},
    {name:'Janshtabdi',id:'1231',arrTime:'10.10AM',depTime:'10.30AM'}
  ];
  ngOnInit() {
   let headers=new Headers({'Content-Type':'application/json'});
   let reqOptions=new RequestOptions({headers:headers});
   let train={
    "trainNo":"123",
     "coachId":"3453",
    "coachType":"5345",
    "seatType":"1A",
    "dateOfJourney":"07/07/2017",
    "dateOfBooking":"08/07/2017"
    };
    this.http.post('http://localhost:8090/IndianRailways/app/appController/booking',train,reqOptions).subscribe(res=>{
      console.log(res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Input } from '@angular/core';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private http:Http) { 
    
  }
  myName:string='My Name';
  searchData:any=[];
  trainList=[
    {name:'Janshtabdi',id:'1231',arrTime:'10.10AM',depTime:'10.30AM'},
    {name:'Janshtabdi',id:'1231',arrTime:'10.10AM',depTime:'10.30AM'}
  ];
  ngOnInit() {
    this.trainList=this.searchData;
  /*  let headers=new Headers({'Content-Type':'application/json'});
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
    }); */
  }

  bookTicket(){

  let headers=new Headers({'Content-Type':'application/json'});
   let reqOptions=new RequestOptions({headers:headers});
   let train={
    "trainNo":"1235",
    "routeId":"1",
    "seatType":"1A",
    "dateOfJourney":"22/12/2017"
    };
    this.http.post('http://localhost:8000/IndianRailways/app/passangerCtrl/booking',train,reqOptions).subscribe(res=>{
      if(res.status==200){
        let jsonResponse=res.json();
        console.log(jsonResponse);
        if(JSON.parse(jsonResponse.response).isBokingSuccess){
          console.log("Booking done successfully.....");
        }else{
          //
        }
      }
    }); 

  }


}

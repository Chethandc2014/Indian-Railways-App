import { Component, OnInit } from '@angular/core';
import { Passenger } from 'app/models/passenger';
import { Http } from '@angular/http';
import { RequestOptions,Headers} from '@angular/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:Http) {
   
   }

  ngOnInit() {
    this.getStates();
  }

  pass:Passenger=new Passenger();
  stateList=[];

  register():void {
    console.log(this.pass);
    let header=new Headers({'Content-Type':'application/json'});
    let body=this.pass;
    this.http.post('http://localhost:8000/IndianRailways/app/passangerCtrl/register',body,new RequestOptions({headers:header})).toPromise().then(res => {
      console.log(res.json().data);
     
    });

  }

  getStates():void {

    this.http.get('http://localhost:8050/IndianRailways/app/appController/registration/dropdowns/states').subscribe(response=>{
      console.log(response.json());
    if(response.status==200){
      let jsonResponse=response.json();
      this.stateList=JSON.parse(jsonResponse.stateList);
      console.log(this.stateList);
    }else{
       //NoData or Server Issue...
    }

    });

  } 



}

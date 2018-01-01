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
  message:string;
  showMessage:boolean=false;

  register():void {
    console.log(this.pass);
    let header=new Headers({'Content-Type':'application/json'});
    let body=this.pass;
    this.http.post('http://localhost:8000/IndianRailways/app/passangerCtrl/register',body,new RequestOptions({headers:header})).toPromise().then(res => {
  
    if(res.status==200){
      let jsonResponse=res.json();
      console.log(jsonResponse);
         this.showMessage=true;
         this.message=JSON.parse(jsonResponse.response).message;

    }else{
      //Server issue...
    }
    
     
    });

  }

  getStates():void {

    this.http.get('http://localhost:8000/IndianRailways/app/appController/registration/dropdowns/states').subscribe(response=>{
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

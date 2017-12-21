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
  }

  pass:Passenger=new Passenger();

  register(){
    console.log(this.pass);
    let header=new Headers({'Content-Type':'application/json'});
    let body=this.pass;
    this.http.post('http://localhost:8000/IndianRailways/app/passangerCtrl/register',body,new RequestOptions({headers:header})).toPromise().then(res => {
      console.log(res.json().data);
     
    });

  }

}

import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {log} from 'util';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticateService {

  constructor(private http: Http,private router:Router) {}

  login(loginUser: User): Promise<any> {
    log('Beging of login method UserDtails::' + loginUser);
    let name=loginUser.name;
    let password=loginUser.password;
    //let params=new URLSearchParams();
    //params.append('name',name);
    //params.append('password',password);
    //let body=params;
    let body='name='+name+'&&'+'password='+password;
    let header=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this.http.post('http://localhost:8000/IndianRailways/app/loginController/login',body,new RequestOptions({headers:header})).toPromise().then(res => {
     // console.log(res.json());
    let responseStr=res.json();
       if(res.status==200){
        let responseJson=JSON.parse(responseStr);
        if(responseJson.isLoginSuccess){
          this.router.navigate(['./home']);
        }else{
          //UserID or Password is wrong...
        }
       }
     
    }
    );
  }

  //Login Post Request
  /*loginPost(loginUser: User): void {
    let header = new Headers({'Content-Type': 'application/json'});
    let option = new RequestOptions({headers: header});
     this.http.post('api/authentication', {'user': loginUser}, option)
      .catch(this.loginError).subscribe(response=>response.json().data);

  }

  loginError(error: any): Observable<Response> {
    console.log('Error while fetchind data from Server...');
    return;
  }*/

}

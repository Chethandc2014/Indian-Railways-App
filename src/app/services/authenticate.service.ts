import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {log} from 'util';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthenticateService {

  constructor(private http: Http) {}

  login(loginUser: User): Promise<any> {
    log('Beging of login method UserDtails::' + loginUser);
    let name=loginUser.name;
    let password=loginUser.password;
    return this.http.get('api/authentication?name=${name}&&password=${password}').toPromise().then(res => {
      console.log(res.json().data);
      //data=res.json().data.length>0;
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

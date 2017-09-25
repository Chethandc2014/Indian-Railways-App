import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { log } from 'util';

@Injectable()
export class AuthenticateService {

  constructor() { }
  
  login(loginUser:User):boolean{
    log('Beging of login method UserDtails::'+loginUser);
    return true;
  }

}

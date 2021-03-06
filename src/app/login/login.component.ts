import {User} from '../models/user';
import { AuthenticateService } from '../services/authenticate.service';
import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [User,AuthenticateService]
})
export class LoginComponent implements OnInit {

  title = 'INDIAN RAILWAYS';
  @Input() loginUser: User;
  
  

  constructor(loginUser: User,private authenticateService:AuthenticateService,private router:Router) {
    this.loginUser = loginUser;
  }

  ngOnInit() {
  }
  submit(){
   this.authenticateService.login(this.loginUser);
    //this.router.navigate(['./home']);
  }

  signup(){
    this.router.navigate(['./registration']);
  }
}

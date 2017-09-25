import {User} from '../models/user';
import { AuthenticateService } from '../services/authenticate.service';
import {Component, OnInit, Input} from '@angular/core';
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

  constructor(loginUser: User,private authenticateService:AuthenticateService) {
    this.loginUser = loginUser;
  }

  ngOnInit() {
  }
  submit(){
    log('Inside submit method');
    let success= this.authenticateService.login(this.loginUser);
    log('Authenticaiton----'+success)
  }
}

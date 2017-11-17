import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';



import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { InMemeoryLoginService } from './mock-services/in-memeory-login-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {TabsModule} from 'ngx-bootstrap/tabs'
import { SearchResultComponent } from './search-result/search-result.component';


const ROUTES:Route[]=[
                    /*  {path:'login',component:LoginComponent}, */
                     {path:'home',component:HomepageComponent}
                     ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SearchResultComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemeoryLoginService),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

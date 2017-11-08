import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';



import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { InMemeoryLoginService } from './mock-services/in-memeory-login-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent ,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemeoryLoginService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

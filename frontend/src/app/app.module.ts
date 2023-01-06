import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { AdminComponent } from './admin/admin.component';
import { RrentComponent } from './rrent/rrent.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { HomepageComponent } from './homepage2/homepage/homepage.component';
import { LoginComponent } from './homepage2/login/login.component';
import { SignupComponent } from './homepage2/signup/signup.component';
import { RpostComponent } from './rrent/rpost/rpost.component';
import { RgetComponent } from './rrent/rget/rget.component';
import { AboutComponent } from './homepage2/about/about.component';
import { AboutusComponent } from './homepage2/aboutus/aboutus.component';
import { ContactusComponent } from './homepage2/contactus/contactus.component';
import { SearchhomeComponent } from './homepage2/searchhome/searchhome.component';
import { AddhomeComponent } from './rrent/addhome/addhome.component';
import { ViewaddhomeComponent } from './rrent/viewaddhome/viewaddhome.component';
import { ViewuserComponent } from './admin/viewuser/viewuser.component';
import { ViewrequestComponent } from './admin/viewrequest/viewrequest.component';
import { ViewalladdComponent } from './admin/viewalladd/viewalladd.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage2Component,
    AdminComponent,
    RrentComponent,
    AdmineditComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    RpostComponent,
    RgetComponent,
    AboutComponent,
    AboutusComponent,
    ContactusComponent,
    SearchhomeComponent,
    AddhomeComponent,
    ViewaddhomeComponent,
    ViewuserComponent,
    ViewrequestComponent,
    ViewalladdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

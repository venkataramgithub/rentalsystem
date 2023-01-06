import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from  './admin/admin.component';
import { RrentComponent } from './rrent/rrent.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { HomepageComponent } from './homepage2/homepage/homepage.component';
import { LoginComponent } from './homepage2/login/login.component';
import { SignupComponent } from './homepage2/signup/signup.component';
import { RpostComponent } from './rrent/rpost/rpost.component';
import { RgetComponent } from './rrent/rget/rget.component';
import { AboutusComponent } from './homepage2/aboutus/aboutus.component';
import { ContactusComponent } from './homepage2/contactus/contactus.component';
import { SearchhomeComponent } from './homepage2/searchhome/searchhome.component';
import { AboutComponent } from './homepage2/about/about.component';
import { ViewuserComponent } from './admin/viewuser/viewuser.component';
import { ViewrequestComponent } from './admin/viewrequest/viewrequest.component';
import { ViewalladdComponent } from './admin/viewalladd/viewalladd.component';

const routes: Routes = [
{path:'',redirectTo:'/homepage2',pathMatch:'full'},
{path:'admin',component:AdminComponent,
  children:[
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'viewrequest',component:ViewrequestComponent},
  {path:'viewalladd',component:ViewalladdComponent},
  {path:'about',component:AboutComponent},
  ]
},
{path:'rrent',component:RrentComponent,
  children:[
  {path:'viewadd',component:RpostComponent},
  {path:'addhome',component:RgetComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'',component:HomepageComponent},
  {path:'Searchhome',component:SearchhomeComponent},
  {path:'about',component:AboutComponent},
  ]
},
{path:'homepage2',component:Homepage2Component,
  children:[
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomepageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'Searchhome',component:SearchhomeComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logdetails:any={};

  constructor( private router:Router,private service:StudentService) { }

  ngOnInit() {
  }
  logform(){
    this.service.logging(this.logdetails).subscribe((response)=>{
      alert(response.message);
      this.router.navigate(["/rrent"]);
    },
    (errorResponse)=>{
      alert(errorResponse.message);
    });
  }
}

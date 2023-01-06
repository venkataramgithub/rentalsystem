import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register:any={
    status:'inactive',
  };

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit() {
  }
  rentalregister(){
    this.service.registerform(this.register).subscribe((response)=>{
      alert(response.message);
      console.log(response.message);
    },
    (errorResponse)=>{
      alert(errorResponse.error);
    });
  }
}

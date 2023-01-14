import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RrentService } from '../rrent.service';

@Component({
  selector: 'app-rget',
  templateUrl: './rget.component.html',
  styleUrls: ['./rget.component.css']
})
export class RgetComponent implements OnInit {
 addhome:any={};

  constructor(private route:Router, private rservice:RrentService) {
  }
  ngOnInit() {
  }
  addhomefun(){
    this.rservice.addhome(this.addhome).subscribe((response)=>{
      alert(response.message);
      console.log(response.message);
    },
    (errorResponse)=>{
      alert(errorResponse.error);
      console.log(errorResponse.error);
    })
  }
  
}

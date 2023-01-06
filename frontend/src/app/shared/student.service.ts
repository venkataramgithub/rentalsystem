import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http:HttpClient) { }
  public registerform(register:any):Observable<any>{
     return this.http.post("http://localhost:3000/rentalregister",register);
  }
  public logging(login:any):Observable<any>{
    return this.http.post("http://localhost:3000/logining",login);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RrentService{
  constructor( private http:HttpClient) { }

  public addhome(addhome:any):Observable<any>{
    return this.http.post("http://localhost:3000/addhouse",addhome);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor(private http:HttpClient) {
    
   }
   getValues()
   {
    return this.http.get('https://api.wheretheiss.at/v1/satellites/25544');
   }
  
  getUsers()
  {
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser()
  {
   return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
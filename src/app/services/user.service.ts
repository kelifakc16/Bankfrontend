// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { User } from '../models/user';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
 
//   api:string='http://localhost:8087/user';
//   httpOptions={
//   headers:new HttpHeaders({
//     'Content-Type':'application/json'
//   })
//   }
//   constructor(private http:HttpClient) { }

//  login(user:User):Observable<User>{
//   return this.http.post<User>(this.api.concat('/login'), user, this.httpOptions);
//  }
// }

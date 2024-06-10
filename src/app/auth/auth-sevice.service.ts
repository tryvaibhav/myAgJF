import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthSeviceService {

  private appUrl = 'http://localhost:4046';

  constructor(private http:HttpClient) { }

 fetchData():Observable<any>{
  // return this.http.get<any>(`$(this.apiUrl)/signin`);
  return this.http.get<any>(`${this.appUrl}/user/getUsers`);
 }

 loginData(credentials:{email:string,password:string}):Observable<any>{
  return this.http.post<any>(`${this.appUrl}/user/signin`,credentials, { withCredentials: true })
 }
  
}

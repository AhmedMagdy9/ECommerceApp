import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class AuthenSerService {

  personData:BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http:HttpClient) { }


  sendRegAPI(userData:object ):Observable<any>
  {
   return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , userData)
  }

  
  sendLoginAPI(userData:object ):Observable<any>
  {
   return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , userData)
  }

  saveToken(){

    this.personData.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken')))) 
  
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:String = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }
  signup(data:any){
    return this.http.post<any>(`${this.apiUrl}/signup`,data)
  }
  login(data:any){
    return this.http.post<any>(`${this.apiUrl}/login`,data)
  }
}

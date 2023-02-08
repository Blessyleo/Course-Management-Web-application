import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  apiUrl:String = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  addcourse(data:any){
    return this.http.post<any>(`${this.apiUrl}/course`,data)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getcourse() {
    return this.http.get<any>(`${this.apiUrl}/courselist`)
  }
  enroll(data: any) {
    return this.http.post<any>(`${this.apiUrl}/enroll`, data)
  }
}

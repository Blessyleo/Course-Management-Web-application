import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  apiUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  addcourse(data: any) {
    return this.http.post<any>(`${this.apiUrl}/course`, data)
  }
  getenroll() {
    return this.http.get<any>(`${this.apiUrl}/enroll`)
  }
  
  approve(data: any) {
    return this.http.put<any>(`${this.apiUrl}/approve`, data)
  }
  reject(data: any) {
    return this.http.put<any>(`${this.apiUrl}/reject`, data)
  }

  approvedcount() {
    return this.http.get<any>(`${this.apiUrl}/approvedcount`)
  }
  rejectedcount() {
    return this.http.get<any>(`${this.apiUrl}/rejectedcount`)
  }
  pendingcount() {
    return this.http.get<any>(`${this.apiUrl}/pendingcount`)
  }
}

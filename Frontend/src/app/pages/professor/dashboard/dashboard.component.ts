import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private professor: ProfessorService) { }

  enrolllists: any = []
  approvedcount: any
  rejectedcount: any
  pendingcount: any
  clicked = false;

  ngOnInit(): void {

    this.getdata();

    this.professor.approvedcount().subscribe(res => {
      this.approvedcount = res;
    })
    this.professor.rejectedcount().subscribe(res => {
      this.rejectedcount = res;
    })
    this.professor.pendingcount().subscribe(res => {
      this.pendingcount = res;
    })
  }

  getdata() {
    this.professor.getenroll().subscribe(res => {
      this.enrolllists = res
    })
  }

  approve(id: any, course: string) {
    let data = { "_id": id, "status": "Approved", "course": course }
    this.professor.approve(data).subscribe((res: any) => {
      alert("Application approved");
      this.getdata();
    })

  }

  reject(id: any) {
    let data = { "_id": id, "status": "Rejected" }
    this.professor.reject(data).subscribe((res: any) => {
      alert("Application rejected")
      this.getdata();
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent implements OnInit {

  constructor(private student: StudentService) { }

  courselists: any = []

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.student.getcourse().subscribe(res => {
      this.courselists = res
      console.log(res);
    })
  }

}

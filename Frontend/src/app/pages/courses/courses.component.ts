import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private professor: ProfessorService) { }

  courselists: any = []

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.professor.getcourse().subscribe(res => {
      this.courselists = res
    })
  }

}

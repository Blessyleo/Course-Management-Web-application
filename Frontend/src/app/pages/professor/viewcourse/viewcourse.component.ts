import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

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
  onDelete(id: string) {

    this.professor.onDelete(id).subscribe(res => {
      alert("Data Deleted");
      this.getdata();
    })

  }



}

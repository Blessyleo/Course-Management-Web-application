import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentlayout',
  templateUrl: './studentlayout.component.html',
  styleUrls: ['./studentlayout.component.css']
})
export class StudentlayoutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private student: StudentService) { }

  courselists: any = []

  ngOnInit(): void {
    this.getdata();
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
  getdata() {
    this.student.getcourse().subscribe(res => {
      this.courselists = res
      console.log(res);
    })
  }


}

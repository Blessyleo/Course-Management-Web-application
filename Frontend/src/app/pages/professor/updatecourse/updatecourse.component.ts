import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  id: any
  course: any = { nam: '', details: '', price: '', startdate: '', duration: '' };

  constructor(private actroute: ActivatedRoute, private router: Router, private professor: ProfessorService) { }

  ngOnInit(): void {
    this.id = this.actroute.snapshot.params['id'];
    this.professor.singlecourse(this.id).subscribe(res => {
      this.course = res;
      // console.log(res);
    })
  }
  onsubmit() {

    this.professor.updatecourse(this.course).subscribe(res => {
      alert("Data updated");
      this.router.navigate(['/professor/viewcourse']);
    })
  }

}

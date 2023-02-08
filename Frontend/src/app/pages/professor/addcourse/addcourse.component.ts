import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  courseform: any = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'duration': new FormControl('', [Validators.required]),
    'startdate': new FormControl('', [Validators.required]),
    'details': new FormControl('', [Validators.required]),
    'price': new FormControl('', Validators.required)
  })

  constructor(private professorservice: ProfessorService, private router: Router) { }

  ngOnInit(): void {
  }

  onsubmit() {
    this.professorservice.addcourse(this.courseform.value)
      .subscribe({
        complete: () => {
          alert("Data saved");
          this.courseform.reset();

        }
      })
  }

}

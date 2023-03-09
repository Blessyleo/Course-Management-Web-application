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
  get name() {
    return this.courseform.get('name')
  }
  get duration() {
    return this.courseform.get('duration')
  }
  get startdate() {
    return this.courseform.get('startdate')
  }
  get details() {
    return this.courseform.get('details')
  }
  get price() {
    return this.courseform.get('price')
  }

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

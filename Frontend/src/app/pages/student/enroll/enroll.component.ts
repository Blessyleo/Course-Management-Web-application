import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  enrollform: any = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'gender': new FormControl('', [Validators.required]),
    'dob': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required]),
    'phone': new FormControl('', Validators.required),
    'qualification': new FormControl('', Validators.required),
    'year': new FormControl('', Validators.required),
    'course': new FormControl('', Validators.required)
  })

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
  onsubmit() {
    this.student.enroll(this.enrollform.value)
      .subscribe({
        complete: () => {
          alert("Data saved");
          this.enrollform.reset();

        }
      })
  }

}

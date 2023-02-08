import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: any = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'dob': new FormControl('', [Validators.required]),
    'phone': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', [Validators.required]),
    'role': new FormControl('', [Validators.required])

  })

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onsubmit() {
    console.log(this.signup)
    this.auth.signup(this.signup.value).subscribe(res => {
      if (res.message) {
        alert(res.message)
        this.router.navigate(['/signup'])


      } else {
        alert("registered successfully");
        this.router.navigate(['/login'])
      }
    })
  }

}

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
    'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[A-Za-z0-9]).{8,}$')]),
    'role': new FormControl('', [Validators.required])

  })
  get role() {
    return this.signup.get('role')
  }
  get name() {
    return this.signup.get('name')
  }
  get dob() {
    return this.signup.get('dob')
  }
  get phone() {
    return this.signup.get('phone')
  }
  get address() {
    return this.signup.get('address')
  }
  get email() {
    return this.signup.get('email')
  }
  get password() {
    return this.signup.get('password')
  }

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

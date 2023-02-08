import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  userform = {
    'email': '',
    'password': ''
  }

  userverify() {
    this.auth.login(this.userform).subscribe(res => {
      if (res.message) {
        alert(res.message)
      }
      else if (res.role == "Student") {
        alert("Student has successfully logged in")
        this.route.navigate(['/student'])

      }
      else {
        alert("Professor has successfully logged in")
        this.route.navigate(['/professor'])

      }
    })
  }

}

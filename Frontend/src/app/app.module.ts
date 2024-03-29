import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ProfessorlayoutComponent } from './pages/professor/professorlayout/professorlayout.component';
import { StudentlayoutComponent } from './pages/student/studentlayout/studentlayout.component';
import { AddcourseComponent } from './pages/professor/addcourse/addcourse.component';
import { FooterComponent } from './components/footer/footer.component';
import { EnrollComponent } from './pages/student/enroll/enroll.component';
import { DashboardComponent } from './pages/professor/dashboard/dashboard.component';
import { ViewcourseComponent } from './pages/professor/viewcourse/viewcourse.component';
import { UpdatecourseComponent } from './pages/professor/updatecourse/updatecourse.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SdashboardComponent } from './pages/student/sdashboard/sdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfessorlayoutComponent,
    StudentlayoutComponent,
    AddcourseComponent,
    FooterComponent,
    EnrollComponent,
    DashboardComponent,
    ViewcourseComponent,
    UpdatecourseComponent,
    CoursesComponent,
    SdashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentlayoutComponent } from './pages/student/studentlayout/studentlayout.component';
import { ProfessorlayoutComponent } from './pages/professor/professorlayout/professorlayout.component';
import { AddcourseComponent } from './pages/professor/addcourse/addcourse.component';
import { EnrollComponent } from './pages/student/enroll/enroll.component';
import { DashboardComponent } from './pages/professor/dashboard/dashboard.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{path:'student',component:StudentlayoutComponent,children:[{path:'enrollcourse',component:EnrollComponent}]},
{path:'professor',component:ProfessorlayoutComponent,children:[{path:'',component:DashboardComponent},{path:'dashboard',component:DashboardComponent},{path:'addcourse',component:AddcourseComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

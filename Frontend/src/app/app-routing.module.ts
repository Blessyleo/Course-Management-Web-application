import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentlayoutComponent } from './pages/student/studentlayout/studentlayout.component';
import { ProfessorlayoutComponent } from './pages/professor/professorlayout/professorlayout.component';
import { AddcourseComponent } from './pages/professor/addcourse/addcourse.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{path:'student',component:StudentlayoutComponent},
{path:'professor',component:ProfessorlayoutComponent,children:[{path:'addcourse',component:AddcourseComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

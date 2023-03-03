import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from '../login/login.component';
import { IndexComponent } from '../index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'employee/home',
    component: HomeComponent,
  },
  {
    path: 'employee/create',
    component:CreateComponent,
  },
  {
    path:'employee/edit/:id',
    component: EditComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'index',
    component:IndexComponent ,
  },
  {
    path:'',
    component:IndexComponent ,
  },
  {
    path:'employee/dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

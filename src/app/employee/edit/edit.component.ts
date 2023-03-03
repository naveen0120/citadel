import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  employeeForm: Employee = {
    id: 0,
    name: '',
    designation: '',
    salary: 0,
    email:'',
    phone:'',
    experience:'',
    taskstatus:'',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private employeeService: EmployeeService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.employeeService.getById(id).subscribe((data) => {
      this.employeeForm = data;
    });
  }
 
  update() {
    this.employeeService.update(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employee/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
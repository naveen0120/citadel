import { Component,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var window: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allEmployee: Employee[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  closeResult: string = '';

  
  constructor(private modalService: NgbModal,
    private employeeService: EmployeeService) {}

    
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  findSalary(allEmployee: any[]): any[] {
    return allEmployee.filter(p => p.salary > 30000);
  }

  getCount(){
    return this.allEmployee.filter(o => o.salary > 30000).length;
  }

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } 
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    get() {
      this.employeeService.get().subscribe((data) => {
        this.allEmployee = data;
      });
    }

    openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
   
    delete() {
      this.employeeService.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.allEmployee = this.allEmployee.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
    }
  

}

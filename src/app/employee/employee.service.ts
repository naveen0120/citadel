import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  create(payload: Employee) {
    return this.http.post<Employee>('http://localhost:3000/employee', payload);
  }

  getById(id: number) {
    return this.http.get<Employee>(`http://localhost:3000/employee/${id}`);
   }
    
   update(payload:Employee){
    return this.http.put(`http://localhost:3000/employee/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Employee>(`http://localhost:3000/employee/${id}`);
   }

}

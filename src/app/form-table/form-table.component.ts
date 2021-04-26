import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})
export class FormTableComponent implements OnInit {

  model = new Employee('Ejaz','Banglore','make',25,7509535785);
  name;
  address;
  age;
  gender;
  mobile;
  emp= new Employee('','','',0,0);
  employees=[];
  fatchedEmployee=[]
  constructor() { }

  ngOnInit(): void {
  }
  addData(){
    this.emp.name=this.name;
    this.emp.address=this.address;
    this.emp.age=this.age;
    this.emp.mobile=this.mobile;
    this.emp.gender=this.gender;
    this.employees.push(new Employee(this.name,this.address,this.gender,this.age,this.mobile));
    localStorage.setItem("employees", JSON.stringify(this.employees));
    console.log('Data Saved to Local Storage',this.employees)
    this.fatchedEmployee = JSON.parse(localStorage.getItem("employees"));
    console.log('fetched Data',this.fatchedEmployee)
  }
  byAge(a,b){
    return a.age - b.age;
  }
  sortData(){
    this.fatchedEmployee.sort(this.byAge)
  }

}

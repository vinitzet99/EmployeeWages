/**
 * Author: Vinit Kumar
 * Created on: 09-Feb-2022
 * Employee Wages
 */
//class
class EmployeePayrollData{
  // property
  id;
  salary;                   
  // constructor
  constructor(id, name, salary) { 
   this.id = id;
   this.name = name;
   this.salary = salary;
  }
  
  // getter and setter method
  get name() 
  { 
      return this._name; 
  }
  
  set name(name) 
  { 
      this._name = name; 
  }
  
  // method
  toString() {
       return "id=" + this.id + ", name='" + this.name + "', salary=" + this.salary;
   }
  }
  
  //create object
  let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000); 
  console.log(employeePayrollData.toString());
  //log name
  employeePayrollData.name = "john";
  console.log(employeePayrollData.toString());
/**
 * Author: Vinit Kumar
 * Created on: 09-Feb-2022
 * Employee Wages
 */
//constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
let empHrs = 0; 
empCheck = Math.floor(Math.random() * 10) % 3; //generate random 
switch (empCheck) //case
{ 
    case IS_PART_TIME: 
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME: 
        empHrs = FULL_TIME_HOURS;
        break; 
    default: 
        empHrs = 0; 
} 
let empWage = empHrs * WAGE_PER_HOUR; //calculate wage
console.log("Emp Wage: " + empWage);  //log wage
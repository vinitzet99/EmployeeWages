/**
 * Author: Vinit Kumar
 * Created on: 09-Feb-2022
 * Employee Wages
 */
const IS_ABSENT = 0 //declare constant
let empCheck = Math.floor(Math.random() * 10) % 2; //generate random value
if (empCheck == IS_ABSENT) //condition
{ 
    console.log("Employee is Absent");  //Absent Message
    return;
} 
else 
{ 
    console. log("Employee is Present"); //Present Message
} 

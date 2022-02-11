/**
 * Author: Vinit Kumar
 * Created on: 09-Feb-2022
 * Employee Wages
 */
//constant declarations
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const MAX_HRS_IN_MONTH = 160; 
const NUM_OF_WORKING_DAYS=20
let totalEmpHrs = 0;
let totalWorkingDays=0; 
let empDailyWageArr = new Array();

//calculating daily wage by emphrs.
function calcDailyWage(empHrs) 
{ 
    return empHrs * WAGE_PER_HOUR;
}
//getting emphrs as part time or full time.     
function getWorkingHours(empCheck) 
{ 
    switch (empCheck) //case
    {   
        case IS_PART_TIME: 
            return PART_TIME_HOURS; 
        case IS_FULL_TIME: 
            return FULL_TIME_HOURS; 
        default: 
            return 0; 
    } 
}
     

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3; 
    let empHrs = getWorkingHours(empCheck); 
    totalEmpHrs += empHrs;
    //pusing values to array. 
    empDailyWageArr.push(calcDailyWage(empHrs));
}
//calculating wages
let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

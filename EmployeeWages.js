/**
 * Author: Vinit Kumar
 * Created on: 09-Feb-2022
 * Employee Wages
 */
//constant declarations                        
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;                       
let totalEmpHrs = 0;                                   
let totalWorkingDays= 0; 
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 

function calcDailyWage(empHrs) 
     { 
       return empHrs * WAGE_PER_HOUR;
     }
     
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

function calcDailyWage(empHrs) { 
    return empHrs * WAGE_PER_HOUR; 
}
// UC 10 Object Creation
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
    {
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        //greet(){
         //       return 'Hii.Its greet!'+this.dayNum;
       // },
       toString() {
       return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + 
        ' And Wage Earned = ' + this.dailyWage},
});
}
console.log("UC 10 Showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);
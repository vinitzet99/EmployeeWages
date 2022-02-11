/**
 * Author: Vinit Kumar
 * Created on: 09-Feb-2022
 * Employee Wages
 */
//constant declarations
const MAX_HRS_IN_MONTH = 160; 
const NUM_OF_WORKING_DAYS=20
let totalEmpHrs = 0;
let totalWorkingDays=0; 
let empDailyWageArr = new Array();
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
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) 
    {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10)%3; 
      let empHrs = getWorkingHours(empCheck);
      totalEmpHrs += empHrs; 
      empDailyWageArr.push(calcDailyWage(empHrs));
    }

    let empWage = calcDailyWage(totalEmpHrs);

// Array Helper Functions
// UC 7A - Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) { 
   totEmpWage += dailyWage; 
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
          " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) { 
   return totalWage + dailyWage;
}

console.log("UC7A - Emp Wage with reduce: " + 
          empDailyWageArr.reduce(totalWages, 0));


// UC 7B - Show the Day along with Daily Wage using Array map helper function 
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
   dailyCntr++;
   return dailyCntr + "=" + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage); 
console.log("UC7B - Daily Wage Map");
console. log(mapDayWithWageArr);

// UC 7C - Show Days when Full time wage of 160 were earned 
function fulltimeWage(dailyWage) {
   return dailyWage.includes("160");
    }
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage); 
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned"); 
console. log(fullDayWageArr);
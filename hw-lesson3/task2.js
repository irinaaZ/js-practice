/*
We have an object storing salaries of our team:
let salaries = { John: 250, Ann: 250, Peter: 500 }
Write the function to sum all salaries and return it.
Should be 1000 in the example above.
If salaries is empty, then the result must be 0.


2.1) We have an object storing salaries of our team:
let salaries = { John: 250, Ann: 250, Peter: 500 }
Write the function that returns name and value of employer that gets biggest salary
*/

//2
function salarySum(object) {
    let sum = 0;
    for (let key in object) {
        if (object[key] == "" || isNaN(object[key])) {
            continue;
        }
        sum += object[key];
    }
    return isNaN(sum) ? 0 : sum;
}

let salaries = { John: 250, Ann: 250, Peter: 500 }
alert(`Salary sum is ${salarySum(salaries)}`);


//2.1
let salaries = { John: 250, Ann: 250, Peter: 500 };

let nameWithMaxSalary = Object.keys(salaries).reduce((a, b) => salaries[a] > salaries[b] ? a : b);
nameWithMaxSalary = nameWithMaxSalary.length > 0 ? nameWithMaxSalary : "'No name'";

let maxSalaryAmount = Object.values(salaries).reduce((a, b) => a > b ? a : b);
maxSalaryAmount = isNaN(maxSalaryAmount) ||
    !isFinite(maxSalaryAmount) ||
    maxSalaryAmount.length == 0
    ? 0 : maxSalaryAmount;

alert(`${nameWithMaxSalary} has the max salary ${maxSalaryAmount} among the company`);
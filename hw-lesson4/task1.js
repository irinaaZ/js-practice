/* Exercise 1
 When you run arrayFromRange function should dispayd numbers from min to max 
 Also this function should accept negative numbers
 */
function arrayFromRange(min, max) {
    let resultArray = [];
    for (let i = min; min <= max; min++) {
        resultArray.unshift(min);
    };
    return resultArray.sort((a, b) => a - b);
};

const numbers = arrayFromRange(1, 4);

console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]
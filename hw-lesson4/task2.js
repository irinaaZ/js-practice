/* Exercise 2
Need to create function which display the max number from the array
*/
const numbers = [1, 2, 3, 4, 5];

const maxNumber = getMax(numbers);

console.log(maxNumber) // should display max nuber from the array

function getMax(array) {
    return array.reduce((a, b) => a > b ? a : b);
};
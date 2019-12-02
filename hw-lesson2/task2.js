/*
Write script that will
accept user name
welcome user with his username
ask his birthday year
calculate how old is user, and print (or alert) his calculated age
*/

let userName = prompt('Please, enter your first name', 'Name');
while (userName.length == 0) {
    userName = prompt('Please, enter your first name', 'Name');
}
alert(`Hello, ${userName}, nice to meet you!`);

let userBirthdayYear = parseInt(prompt('Please enter your birthday year', '1993'));
while (userBirthdayYear.length < 4 || isNaN(userBirthdayYear)) {
    userBirthdayYear = parseInt(prompt('Please enter your birthday year', '1993'));
}
userAge = new Date().getFullYear() - userBirthdayYear;
alert(userAge + ' years');
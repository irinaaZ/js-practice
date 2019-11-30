/*
Write script that will
accept user name
welcome user with his username
ask his birthday year
calculate how old is user, and print (or alert) his calculated age
*/

do {
    var userName = prompt('Please, enter your first name', 'Name');
} while (userName.length == 0);
alert('Hello,' + userName + ', nice to meet you!');

do {
    var userBirthdayYear = parseInt(prompt('Please enter your birthday year', '1993'));
}
while (userBirthdayYear.length !== 4 || isNaN(userBirthdayYear));
let userAge = new Date().getFullYear() - userBirthdayYear;
alert(userAge + ' years');
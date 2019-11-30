let result = parseInt(prompt('Please enter any number', '0'));
while (result.length == 0 || isNaN(result)) {
    result = parseInt(prompt('Please enter any number', '0'));
}

switch (true) {
    case (result < 60):
        print('F');
        break;
    case (result < 70):
        print('D');
        break;
    case (result < 80):
        print('C');
        break;
    case (result < 90):
        print('B');
        break;
    case (result < 100):
        print('A');
        break;
    default:
        print('Number is > 100');
        break;
}
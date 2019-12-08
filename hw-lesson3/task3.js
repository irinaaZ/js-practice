/*Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
For instance:
// before the call let menu = { width: 200, height: 300, title: "My menu" };
multiplyNumeric(menu);
// after the call menu = { width: 400, height: 600, title: "My menu" };
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
P.S. Use typeof to check for a number here.
*/

function multiplyNumeric(object) {
    for (let value in object) {
        if (typeof object[value] == 'number') {
            object[value] *= 2;
        } else {
            continue;
        }
    }
    console.log(object);
}

let menu = { width: 200, height: 300, title: "My menu" };
multiplyNumeric(menu);
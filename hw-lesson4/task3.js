/* Exercise 3
Ruturn all movies in 2019 with rating > 4
Sort them by their rating in descending order
Pick their title 'a', 'b' ...
So, the result should be ["a", "c"] 
*/

connst = [
    { title: 'a', year: 2019, rating: 4.7 },
    { title: 'b', year: 2018, rating: 4.4 },
    { title: 'c', year: 2019, rating: 4.3 },
    { title: 'f', year: 2019, rating: 3.9 },
]

let moviesWith4Rating2019 = connst
    .filter(item => item.year == 2019 && item.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map(item => item.title);
console.log(moviesWith4Rating2019);
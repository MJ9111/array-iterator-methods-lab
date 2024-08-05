//const inventors = [
//  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, 
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
 //   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
   // { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
 //   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
   // { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
   // { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
   // { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
 // ];
 // const people = [
 //   'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
 //   'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
 //   'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
 //   'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
 //   'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
 //   'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
 //   'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
 //   'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
 //   'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
 //   'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
 //   'Blake, William'
 // ];
 // const travelMethods = [
 //   'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
 //   'bike', 'walk', 'car', 'van', 'car', 'truck'
 // ];
 // const devs = [
//    { name: 'Alex', year: 1988 },
//    { name: 'Dani', year: 1986 },
//    { name: 'Matt', year: 1970 },
//    { name: 'Wes', year: 2015 }
//  ];

//   const comments = [
//     { text: 'Love this!', id: 523423 },
//     { text: 'Super good', id: 823423 },
//     { text: 'You are the best', id: 2039842 },
//     { text: 'Ramen is my fav food ever', id: 123523 },
//     { text: 'Nice Nice Nice!', id: 542328 }
//   ];


  //ex1
//   const inventors = [
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Leonardo', last: 'da Vinci', year: 1452, passed: 1519 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    
// ];


// let veryOldInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
//console.log(veryOldInventors);

//ex2

// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// // Map the array of inventors
// let inventorNames = inventors.map(inventor => ({
//     first: inventor.first,
//     last: inventor.last
// }));

//console.log(inventorNames);


//ex3
// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// let sortedByBirthYear = inventors.sort((a, b) => a.year - b.year);

//console.log(sortedByBirthYear);

//ex4

// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// let inventorNamedAda = inventors.find(inventor => inventor.first === 'Ada');
//console.log(inventorNamedAda);


//ex5
// Array.prototype.map()

// 5. Use the Array.prototype.map() method to reformat each name in the 'people' array. 
// The goal is to convert names from "Last, First" format to "First Last" format.

// Hint: Use the String.prototype.split method to separate the first and last names. You can split the string using ', ' as the separator.
// After splitting the names, rearrange them to the "First Last" format.

//const devs = [
//    { name: 'Alice', age: 22 },
//    { name: 'Bob', age: 17 },
//    { name: 'Charlie', age: 19 },
//    { name: 'David', age: 16 }
//];

// Use some to check if there is at least one person who is 18 or older


//ex5

// const devs = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 16 }
// ];

// let isAdultPresent = devs.some(person => person.age >= 18);


// console.log( firstLast)

//ex6

// Array.prototype.some()

// 6. Determine if there is at least one person in the devs array who is 18 years old or older.

// - You have an array of people with their respective ages.
// - Use the Array.prototype.some() method to check if any person in the array is 18 years old or older.
// - Store the result (true or false) in the variable 'isAdultPresent'. 

//const devs = [
//    { name: 'Alice', age: 22 },
//    { name: 'Bob', age: 17 },
//    { name: 'Charlie', age: 19 },
//    { name: 'David', age: 16 }
//];

//let isEveryone19OrOlder = devs.every(person => person.age >= 19);


// Check your return value:
//console.log( isAdultPresent)



//ex7
// Array.prototype.every()

// 7. Use Array.prototype.every() to determine if every person in the devs array is 19 years old or older.

// - You have an array of individuals, each with their year of birth represented by the 'year' property.
// - Use the Array.prototype.every() method to verify if every individual in the array is at least 19 years old.
// - Store the result (true or false) in the variable 'isEveryone19OrOlder'.

// Array of people with their respective ages for the sake of completeness
// const devs = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 16 }
// ];

// let isEveryone19OrOlder = devs.every(person => person.age >= 19);

// console.log(isEveryone19OrOlder);

//ex8

// const comments = [
//     { text: 'Great post!', id: 123456 },
//     { text: 'Nice article', id: 654321 },
//     { text: 'Interesting read', id: 789012 },
//     { text: 'Super good', id: 823423 },
//     { text: 'Thanks for sharing', id: 345678 }
// ];

// let commentById = comments.find(comment => comment.id === 823423);

// console.log(commentById);


//ex9


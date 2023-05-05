// Spread operator means (...)

// It means if i have an array ---> spread the values
// [1,2,3,4] --> 1,2,3,4

function sum (a,b,c) {
    return a + b + c;

}

let array = [1,2,3];

console.log(sum(...array));


// Example 2 of spread operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];

// COncatemate both arrays [1,2,3,4,5,6]

let arr3 = [...arr1,...arr2]; // [1,2,3,4,5,6]

console.log(arr3);


// Example of SPread (Concatenate Objects)

let student = {
    name: "Mike",
    age: 20
}

let collegeName = "VCC";

let studentWithCollege = {
    ...student,
    collegeName
}

console.log(studentWithCollege)


// REST OPERATOR
// It switches from 1,2,3,4, -> [1,2,3,4]

function multiply ()
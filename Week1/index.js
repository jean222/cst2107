// High Order Functions **********

const fruitslist =["Mango", "Orange", "Pineapple", "Banana"];


// HOF, MAP - Map function is a HOF, which manipulates each value inside the array and returns a new array.
// NOTE: it doesnt chnage the arrya length

const fruitlistPlural = fruitslist.map(function(fruit) {
    return fruit + 's';
})

console/console.log(fruitlistPlural, "fruitsList");


// Example 2
// Where I want to tell if the employee is eligible for a gratuity or not?
// Gratuity is if some completes 5 years with the comapny, the company gives them a reward

const employeeList = [
    {
        name: "Jean",
        age: 21,
        experienceWithCompany: 5
    },
    {
        name: "Andrew",
        age: 19,
        experienceWithCompany: 2
    },
    {
        name: "Helen",
        age: 21,
        experienceWithCompany: 11
    },
]

const modifiedEmployeeList = employeeList.map((employee) => {
    if (employee.experienceWithCompany > 5 ){
        employee.eligibleForGratuity = true;
    }
    else {
        employee.eligibleForGratuity = false;
    }
    return employee;
})

console.log(modifiedEmployeeList, "Modified Employee");


// Filter Function
// Filter function is a HOF which filters the arrya based on a condition 
// The length of the arrya may change

// const employeeNotEligible = modifiedEMployeeList.filter((employee) => {
//     if (employee.empl)
// })



// Question 1
// Let's test how much you know solve this problem, 
// add the prices
const products = [
    {
        name: "Baking Soda",
        price: 10
    },
    {
        name: "Cake",
        price: 20
    },
    {
        name: "Shampoo",
        price: 30
    }
]


const sum = products.reduce(function (total, amount){
    return total + amount.price
}, 0);

console.log(sum, " total amount of the products")

// Reduce Example

let listOfNum = [20, 40, 50, 60, -9];

// I want to see which number is th ehighest value inside the array

let highestValue = listOfNum.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue
},-Infinity)

console.log(highestVlaue, "value");

// Infinity --> Largest Possible Value
// -Inifinity -->
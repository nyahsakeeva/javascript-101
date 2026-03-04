// Requirement:
// Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

// Multiply number with 5 and print the result with below message

let randomNumber = Math.floor((Math.random() * 51))
let result = randomNumber * 51

console.log("The random number is " + randomNumber + ". After multiplying by 5 the result is " + result + ".");



// Requirement:
// Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

// Find the min number
// Find the max number
// Find the absolute difference of the numbers

let numx = Math.floor((Math.random() * 10) +1 )
let numy = Math.floor((Math.random() * 10) +1 )

let minNum = Math.min(numx,numy)
let maxNum = Math.max(numx,numy)
let difference = Math.abs(numx-numy)

console.log(`Min number = ${minNum}`)
console.log(`Max number = ${maxNum}`)
console.log(`Difference = ${difference}`)

// Requirement:
// Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

// Find the remainder of the number by 10

Math.floor(Math.random() * 51 ) + 50
let remainder = randomNumber % 10 

console.log(`Random number = ${randomNumber}`)
console.log(`Remainder when divided by 10 = ${remainder}`)



//Requirement:
// Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
// Calculate some points based on numbers generated. So, the points will be calculated as below
// 1st  number will be multiplied by 5 and added as points
// 2nd number will be multiplied by 4 and added as points
// 3rd number will be multiplied by 3 and added as points
// 4th number will be multiplied by 2 and added as points
// 5th number will be multiplied by 1 and added as points

// Test data:
// 3 7 2 1 8

let randomNumber1 = Math.floor(Math.random() * 10) + 1 
let randomNumber2 = Math.floor(Math.random() * 10) + 1 
let randomNumber3 = Math.floor(Math.random() * 10) + 1 
let randomNumber4 = Math.floor(Math.random() * 10) + 1 
let randomNumber5 = Math.floor(Math.random() * 10) + 1 

let points = 
randomNumber1 * 3
randomNumber2 * 4
randomNumber3 * 3
randomNumber4 * 2
randomNumber5 * 1

console.log(`Numbers generated: ${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${randomNumber4}, ${randomNumber5}`)
console.log(`Total points = ${points}`)


// Requirement:
// Write a program that generates 4 random numbers as below;
// 1st  number to be between 1 and 25 (both included)
// 2nd number to be between 26 and 50 (both included)
// 3rd number to be between 51 and 75 (both included)
// 4th number to be between 76 and 100 (both included)

// Find the absolute difference between the max and min number
// Find the absolute difference between the second and third number
// Find the average of all 4 numbers

const num1 = Math.floor(Math.random() * 25) + 1
const num2 = Math.floor(Math.random() * 25) + 26
const num3 = Math.floor(Math.random() * 25) + 51
const num4 = Math.floor(Math.random() * 25) + 76

const max = Math.max(num1, num2, num3, num4)
const min = Math.min(num1, num2, num3, num4)

const diffMaxMin = Math.abs(max - min)
const diffSecondThird = Math.abs(num2 - num3)

const average = (num1 + num2 + num3 + num4) / 4

console.log(`Numbers: ${num1}, ${num2}, ${num3}, ${num4}`)
console.log(`Difference of max and min = ${diffMaxMin}`)
console.log(`Difference of second and third = ${diffSecondThird}`)
console.log(`Average of all = ${average}`)


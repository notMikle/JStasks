// ---1---
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

// console.log(evenOrOdd(2))
// console.log(evenOrOdd(3))



// ---2---

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
//     Examples
//     makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    return num < 0 ? num : -num;
}

// console.log(makeNegative(3))
// console.log(makeNegative(-3))


// ---3---


// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398


function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// console.log(sum([1,2,3,4]))





// ---4---

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = n => n * (n + 1) / 2;



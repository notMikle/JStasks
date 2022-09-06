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

// ---5---


// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]
//


const reverseSeq = n => {
    let arr = [];
    for (let i=n; i>0; i--) {
        arr.push(i);
    } return arr;
};





// ---6---



// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    return str.split('').reverse().join('');
}



// ---7---
//
// Given an array of integers your solution should find the smallest integer.
//
//     For example:
//
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
//

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}



// ---8---
//

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//     If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// Example(Input1, Input2 --> Output):
//
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);


// ---9---

// Can you find the needle in the haystack?
//
//     Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
//     "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
//     ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}


// ---10---

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//     * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//     * [42, 54, 65, 87, 0]             -> min = 0, max = 87
//     * [5]                             -> min = 5, max = 5


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
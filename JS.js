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
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};


// ---6---


// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str) {
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

const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w);


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

// ---11---

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
//     Note: input will never be an empty string
//

const fakeBin = (x) => {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// ---12---

// Clock shows h hours, m minutes and s seconds after midnight.
//
//     Your task is to write a function which returns the time since midnight in milliseconds.
//
//     Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000
// Input constraints:
//
//     0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
//


const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);


// ---13---
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//
//     For example:
//
//     1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

const cockroachSpeed = s => Math.floor(s / 0.036);

// ---14---

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


// ---15---
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//
//     Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//
//     Create a function which translates a given DNA string into RNA.
//
//     For example:
//
//     "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

const DNAtoRNA = dna => dna.replace(/T/g, 'U');



// ---16---
// Your task is to create a function that does four basic mathematical operations.
//
//     The function should take three arguments - operation(string/char), value1(number), value2(number).
//     The function should return result of numbers after applying the chosen operation.
//
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


// ---17---
// Nathan loves cycling.
//
//     Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
//     You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//
//     For example:
//
//     time = 3 ----> litres = 1
//
// time = 6.7---> litres = 3
//
// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
}

// ---18---
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.
//
//     If you can, try writing it in one line of code.

function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}

// ---19---
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
//     The binary number returned should be a string.
//
//     Examples:(Input1, Input2 --> Output (explanation)))
//
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
function addBinary(a,b){
    return (a+b).toString(2)
}

// ---20---
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
//     You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
//     Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
//     Write a code that gives out the total amount for different days(d).
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));





// ---21---

// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
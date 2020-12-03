// // 5. Max Character
// // Given a string of characters, return the character that appears the most often.

// // const word = 'you only live once'

// const max = word => {
//     word = 'nathan orris'
//     const characters = {}
//     for (let character of word)
//     characters[character] = characters[character] + 1 || 1;

//     let maxCount = 0;
//     let maxCharacter = null;

//     for ( let character in characters ) {
//         if (characters[character] > maxCount) {
//             maxCount = characters[character];
//             maxCharacter = character;
//         }
        
//     }

//     return maxCharacter;
// }

// console.log(max())


// // 6. Anagrams
// // Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

// const checkAnagram = phrase => {
//     phrase = 'i dont know'

// }



// // 7. Vowels
// // Given a string of words or phrases, count the number of vowels.

// // 8. Array Chunking
// // Given an array and a size, split the array items into a list of arrays of the given size.

// // 9. Reverse Array
// // Given an array of items, reverse the order.

// // 11. Capitalization
// // Given a phrase, capitalize every word.


// function findMean() {

//     let thisArray = [1,2,3,4,5]
//     sum = 0

//     for (i = 0; i < thisArray.length; i++) {
//         sum += thisArray[i]
//     }

//     let average = (sum/thisArray.length)

//     return average
// }

// console.log(findMean())

// //  

// function findDifference() {

//     let thatArray = [3,4,7,2,1,8,4]
//     // let otherArray = thatArray.sort()
//     let maxNumber = thatArray[0]
//     let minNumber = thatArray[0]

//     for (i = 1; i < thatArray.length; i++) {
//         if (thatArray[i] > maxNumber) {
//             maxNumber = thatArray[i]
//         } else if (thatArray[i] < minNumber) {
//             minNumber = thatArray[i]
//         }
//     }

//     let difference = (maxNumber - minNumber)

//     return difference
// }

// console.log(findDifference())

// // 

// const findMedian = randomArray => {
//     randomArray = [1,6,4,8,3,7]

// }

// // 12. Caesar Cipher
// // Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

// // 14. Mean, Median, and Mode
// // Given an array of numbers, calculate the mean, median, and mode.

// // / 20. Staircase
// // For a given number of steps, print out a “staircase” using hashes and spaces.

// // 21. Pyramid
//     // For a given number of levels, print out a “pyramid” using hashes and spaces.
// let input_array = [0, 0, 0, 1, 5, 0, 4, 3]

// function move_zero(input_array) {

//     // [0, 1]
//     // [1, 0]
//     // swap two elements

//     // [1, 0]
    
    
//     // const lastNumber = input_array.length;
//     //[1, 5, 3, 0, 0, 0]
//     //i = 3
//     //input_array.length - numOfZeros = 3
//     let numOfZeros = 0
//     for (let i = 0; i < input_array.length - numOfZeros; i++) {
//         if (input_array[i] === 0) { // current element is 0
//             input_array.splice(i, 1)
//             input_array.push(0)
//             numOfZeros++
//             i = i - 1
//         }
//     }
//     return input_array;
// }

// console.log(move_zero(input_array))




let anArray = [1,2,3,4,7]

// function findThen(anArray) {
//     let num = 0
//     for(let i = 0; i < anArray.length; i++) {
//         num += anArray[i]
//     }
//     return (num/anArray.length)
// }

// console.log(findean(anArray))


const findTheMean = (anArray) => anArray.reduce ((a, b)=> a + b)/anArray.length

console.log(findTheMean(anArray))

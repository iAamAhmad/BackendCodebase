/*

//? Task One!
const object1 =
{
   color: 'blue',
   weight: 24,
};
const object2 =
{
   color: 'Red',
   weight: 25,
}
const merged = { ...object1, ...object2 };
console.log(merged);

//? Method 2!

const byAssigned = Object.assign({}, object1, object2);
console.log(byAssigned);

//? The Custom Method.

const byCustomWay = ((...objs) => {
   const ress = objs.map(obj => JSON.parse(JSON.stringify(obj)));
   return ress.reduce((mergedValue, current) => ({
      ...mergedValue, ...current
   }), {});
});


//? Task two

function findIndex(array, targetValue) {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === targetValue) {
         return i; // Return the index when the targetValue is found
      }
   }
   return -1; // Return -1 if the targetValue is not found in the array
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
const target = 30;

const index = findIndex(myArray, target);

if (index !== -1) {
   console.log(`The target value ${target} was found at index ${index}.`);
} else {
   console.log(`The target value ${target} was not found in the array.`);
}

var one = 10;
function two() {
   one = 25;
   var one;
   console.log(one);
}
two();
console.log(one);



function findMedianSortedArrays(nums1, nums2) {
   if (nums1.length > nums2.length) {
     [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
   }
 
   const m = nums1.length;
   const n = nums2.length;
   let left = 0;
   let right = m;
   let median = 0.0;
 
   while (left <= right) {
     const partition1 = Math.floor((left + right) / 2);
     const partition2 = Math.floor((m + n + 1) / 2) - partition1;
 
     const maxLeft1 = partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
     const minRight1 = partition1 === m ? Number.POSITIVE_INFINITY : nums1[partition1];
     const maxLeft2 = partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
     const minRight2 = partition2 === n ? Number.POSITIVE_INFINITY : nums2[partition2];
 
     if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
       if ((m + n) % 2 === 0) {
         median = (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
       } else {
         median = Math.max(maxLeft1, maxLeft2);
       }
       break;
     } else if (maxLeft1 > minRight2) {
       right = partition1 - 1;
     } else {
       left = partition1 + 1;
     }
   }
 
   return median;
 }
 
 // Example usage:
 const nums1 = [1, 3];
 const nums2 = [2];
 const median = findMedianSortedArrays(nums1, nums2);
 console.log(median); // Output: 2.0
 */
/*
 const sampleArray = [1, 2, 3, 5, 8];
 const cloneArray = arr => arr.slice(0);
 console.log('Cloned array Using Slice:', cloneArray(sampleArray));
 
 //* by using spread operator!
 
 let x = [1, 2, 3, 4];
 console.log('Original Array:', x);
 
 let y = [...x];
 console.log('Cloned Array Using Spread Operator:', y);
 
 //* Using Map Method!
 let a = [6, 9, 11, 13];
 console.log('Original Array:', a);
 
 let b = a.map(i => i);
 console.log('Cloned Array Using Map Method:', b);
 
 //* Question Number 2!
 function getFirstElements(arr, n = 1) {
    return arr.length === 0 || n <= 0 ? [] : arr.slice(0, n);
 }
 const myArray = [1, 2, 3, 4, 5];
 console.log('Getting Elements n Elements from an array:\n')
 const firstElement = getFirstElements(myArray);
 const firstThreeElements = getFirstElements(myArray, 3);
 console.log(firstElement);
 console.log(firstThreeElements);
 
 //* Question 3!
 var lastElement = function (array, n) {
    return array === null || n === null
       ? array[array.length - 1]
       : array.slice(Math.max(array.length - n, 0));
 };
 console.log('Printing Last Elements:\n')
 console.log(lastElement([7, 9, 0, -2]));
 console.log(lastElement([7, 9, 0, -2], 3));
 console.log(lastElement([7, 9, 0, -2], 6));
 
 //* Question Number 4!
 
 function sumOfSquares(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += Math.pow(array[i], 2);
    }
    return sum;
 }
 console.log('Sum of squares of all elements of an array:')
 console.log(sumOfSquares([0, 1, 2, 3, 4]));
 
 //* Question number 5:
 
 function removeDuplicates(num) {
    let x;
    len = num.length,
       uniqueArray = [],
       obj = {};
    for (x = 0; x < len; x++) {
       obj[num[x]] = 0;
    }
    for (x in obj) {
       uniqueArray.push(parseInt(x));
    }
    return uniqueArray;
 }
 const myNum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
 console.log('Array of Duplicated elements: \n',myNum);
 result = removeDuplicates(myNum);
 console.log('Array of unique elements: \n ',result);
 */
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let x = 1;
let y = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
   for (let j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j])
         y++;
      if (x < y) {
         x = y;
         item = arr1[i];
      }
   }
   y = 0;
}
console.log(item + " ( " + x + " times ) ");

//* Question Number 2!

const array = [1, 2, 'ignore', 3, 4, 'ignore', 5, 6];
let sum = 0;
let product = 1;

for (let i = 0; i < array.length; i++) {
   if (typeof array[i] === 'number') {
      sum += array[i];
      product *= array[i];
   }
}

console.log(`Sum is: ${sum} and Product is: ${product}`);
/*
let num = 10;
function display() {
   let num = 8;
   console.log(num)
}
display();
console.log(num);
*/
/*
const res = null && undefined;
console.log(res)

const arr=[1,2,3];
const map=(v,i)=>v*i;
const result=arr.map(map);
console.log(result)
*/
// let n1 = 1;
// let n2 = 2;
// console.log(n1 + n2);
// let str1 = '1';
// let str2 = '2';
// console.log(str1 + str2);
/*
let n = 5;
console.log(n == 5); //true
console.log(n === 5); //true
console.log(n != 5); //false
console.log(n > 8); //false
console.log(n < 8); //true
console.log(n >= 8); //false
console.log(n <= 8); //true
*/

/*
let n = 5;
console.log(n >= 5 && n < 10); //true+true
console.log(n > 5 && n < 10); //false+true
console.log(n >= 5 || n < 10); //true+true
console.log(n > 5 || n < 10); //false+true
console.log(!(n < 10)); //false
console.log(!(n > 10)); //true
*/
let country = prompt("Where do you live?")
// Number() function is used to convert the string to number
let age = Number(prompt("What's your age?"))
if (country === "pakistan") {
   if (age >= 18) {
      console.log("Here is your ticket")
   } else {
      console.error("Age restriction")
   }
} else {
   console.log("Invalid country")
}

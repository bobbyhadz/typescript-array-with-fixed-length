export {};

// EXAMPLE 1 - Declare a Fixed-length Array in TypeScript

// ✅ Declare a fixed-length array
let arr: [string, number, number];

arr = ['coords', 10, 5];

console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - Creating an array of N empty elements

// const arr = new Array(4);

// console.log(arr); // 👉️ [, , ,]
// console.log(arr.length); // 👉️ 4

// ---------------------------------------------------

// // EXAMPLE 3 - You can still push elements into a tuple

// const arr: [string, number, number] = ['coords', 10, 5];

// // ✅ Ok
// arr.push('bobbyhadz.com');

// // 👇️ [ 'coords', 10, 5, 'bobbyhadz.com' ]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 4 - Declaring a read-only tuple

// const arr: readonly [string, number, number] = ['coords', 10, 5];

// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 5 - Using a tuple with optional values

// // ✅ Array of Max length
// let arrOfMaxLength3: [string?, string?, string?] = [];

// arrOfMaxLength3 = ['a', 'b', 'c']; // ✅ OK
// arrOfMaxLength3 = ['a', 'b']; // ✅ OK
// arrOfMaxLength3 = ['a']; // ✅ OK

// console.log(arrOfMaxLength3);

// ---------------------------------------------------

// // EXAMPLE 6 - Declaring an array with a minimum length of N

// let arrOfMin2: [string, string, ...string[]] = ['a', 'b'];

// arrOfMin2 = ['c', 'd']; // ✅ OK

// console.log(arrOfMin2);

// ---------------------------------------------------

// // EXAMPLE 7 - Declare a Non-empty Array in TypeScript

// const arr: [number, ...number[]] = [1];
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 8 - Using a type alias with a generic

// type NonEmptyArr<T> = [T, ...T[]];

// let arr: NonEmptyArr<string> = ['a'];

// arr = ['a', 'b']; // ✅ Works

// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 9 - Declaring the tuple as read-only

// const arr: readonly [number, ...number[]] = [1];
// console.log(arr);

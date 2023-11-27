//experimenting with array methods

let arr = [1, 2, 3, 4, 5];

console.log(arr);

//output:
console.log("indexOf(3):", arr.indexOf(3));

//non-existant index -> output = -1
console.log("indexOf(7):", arr.indexOf(10));

//adds new element at the end of the array
console.log("push(7):", arr.push(7));

//removes last array element
console.log("pop():", arr.pop());

//adds a new element at the beginning of the array
console.log("unshift(0):", arr.unshift(0));

//removes first element and shifts all elements to the left
console.log("shift():", arr.shift());

//does the array include the element 3? output: true or false
console.log("includes(3):", arr.includes(3));

//starting from index 1, show all elements till index 2 (aka. excluding 3)
console.log("slice(1, 3):", arr.slice(1,3));

//at index 1, remove 2 elements (output: array)
console.log("splice(1, 2):", arr.splice(1,2));

//basically creates a new array
console.log("Array.of(10,11,12,13,14", Array.of(10,11,12,13,14));

//map creates a new array from calling a function for every array element
const newArray = arr.map(timesTen);
function timesTen(num) {
  return num * 10;
}
console.log("map:", newArray);

//filter
const filter = arr.filter(greaterThanTwo);
function greaterThanTwo(number) {
  return number > 2;
}
console.log("filter:",filter);

// split / join (string)
let str = "Hello,World";
let strArr = str.split(",");
console.log("split:", strArr);

//joins two strings together (in this case with a space)
let joinedStr = strArr.join(" ");
console.log("join:", joinedStr);

//some
function greaterThanOne(i) {
  return i > 1;
}
console.log("some:", arr.some(greaterThanOne));

//reverse elements in array
console.log("reverse:", arr.reverse());

let a = [...arr];
console.log("a = [...arr]:", a);

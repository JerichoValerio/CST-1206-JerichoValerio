// Callback Functions
// When a function is passed as a parameter/argument to another function

function greet(fn) {
  // AS the definition says call me back
  fn();
}

function myName() {
  console.log("Hello prabh");
}

greet(myName); // Hello Prabh

let array = ["P", "R", "A", "B", "H"];

// Here Item ---> Array[i], and index ---> i

// array.forEach(function (item, index) {

// })

// array.forEach((item, index) => {
//     console.log(item, "ARRAy[i] Value");
//     console.log(index, "INDEX VALUE");
// })

// Modular Code
function printVAlue(item, index) {
  console.log(item, "ARRAy[i] Value");
  console.log(index, "INDEX VALUE");
}

array.forEach(printVAlue);

// let array = [1, 2, 3, 4, 5];

// //map function
// let newArray = array.map((item, index) => {
//   return item * 2;
// });
//********************* */

//^^^^^

let numArray = [1, 2, 3, 4, 5];
let newArray = numArray.map(function (item, index) {
  return item * 2;
});

console.log(numArray, "ORIGINAL ARRAY");
console.log(newArray, "NEW ARRAY");
// using the map function, length array is same

//change each value either pass or fail
let studentMathMarks = [
  {
    name: "dan",
    roleNumeber: 100,
    grade: 90,
  },
  {
    name: "dang",
    roleNumeber: 101,
    grade: 40,
  },
  {
    name: "dayy",
    roleNumeber: 103,
    grade: 70,
  },
];

let modifiedArray = studentMathMarks.map((student) => {
  if (student.grade > 50) {
    student.grade = "PASS";
  } else {
    student.grade = "FAIL";
  }
  return student;
});

console.log(modifiedArray);

// let array = [1,2,3,4,5];

// let newArray = array.filter((item, index) => {
//     if (item % )
// })

//filter function
let num2array = [1, 2, 3, 4, 5];

let new2array = num2array.filter((num) => {
  if (num2array % 2 === 0) {
    return true;
  }
});

console.log(num2array, "ORIGINAL ARRAY");
console.log(new2array, "NEW ARRAY");

let passedStudents = modifiedArray.filter(function (stduent) {
  if (student.grade === "pass") {
    return true;
  }
});

let failedStudents = modifiedArray.filter((student) =>
  student.grade === "fail" ? true : false
);
console.log(modifiedArray);

// filter func
let sum = 0;
let array1 = [1, 2, 3, 4, 5];
for (let i = 0; i < array1.length; i++) {
  sum = sum + array1[i];
}
console.log(sum);

let sumOfArray = array1.reduce((accumlator, currentValue) => {
  return accumlator + currentValue;
}, 0);

// accumlator ---> sum
// currenvalue ---> array1[i]

//maximum inside the array
// you can see
let max = -Infinity;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > max) {
    max = array1[i];
  }
  console.log(max);
}

//you can reduce just like the above example
let maxValue = array1.reduce(() => {
  return accumulator > currentValue ? accumulator : currentValue;
}, -Infinity);

console.log(maxValue);

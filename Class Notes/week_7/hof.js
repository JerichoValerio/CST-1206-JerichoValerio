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
let newArray = numArray.map(function(item, index) {
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
        grade: 90
    },
    {
        name: "dang",
        roleNumeber: 101,
        grade: 40
    },
    {
        name: "dayy",
        roleNumeber: 103,
        grade: 70
    }
]

let modifiedArray = studentMathMarks.map((student) => {
    if (student.grade > 50) {
        student.grade = "PASS"

    } else {
        student.grade = "FAIL"
    }
    return student
})

console.log(modifiedArray)
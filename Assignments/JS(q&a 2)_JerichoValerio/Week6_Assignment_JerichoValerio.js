//Question 1
// let student = [
//   {
//   name: "Daniel",
//   email: "daniel@gmail.com",
//   marks: [80, 60, 50, 70, 95]
//   },
//   {
//   name: "Mark",
//   email: "mark@gmail.com",
//   marks: [99, 40, 84, 72, 60]
//   },
//   {
//   name: "Stacy",
//   email: "stacy@gmail.com",
//   marks: [8, 30, 11, 0, 20]
//   },
//   {
//   name: "Geri",
//   email: "geri@gmail.com",
//   marks: [100, 99, 95, 85, 99]
//   }
//   ];
//   Write a function for that takes above array as a parameter and function to calculate the total of
//   the marks of each student, and returns the student with the highest marks.
//   Note: If you want you can add values to the objects of these array. YOU HAVE TO USE ES6
//   FUNCTIONS (HOFs) only.
//   Your function should look like
//   function studentWithHighestMarks(array) {
//   }

var highestStu = 0 // highest marks
var namesStu = '' // student name
var highestMarks = '' // highest marks

const students = [
  {
    name: 'Daniel',
    email: 'daniel@gmail.com',
    subject: [
      { maths: 80 },
      { english: 60 },
      { science: 50 },
      { sports: 70 },
      { science: 95 }
    ]
  },
  {
    name: 'Mark',
    email: 'mark@gmail.com',
    subject: [
      { maths: 99 },
      { english: 40 },
      { science: 84 },
      { sports: 72 },
      { science: 60 }
    ]
  },
  {
    name: 'Stacy',
    email: 'stacy@gmail.com',
    subject: [
      { maths: 8 },
      { english: 30 },
      { science: 11 },
      { sports: 0 },
      { science: 20 }
    ]
  },
  {
    name: 'Geri',
    email: 'geri@gmail.com',
    subject: [
      { maths: 100 },
      { english: 99 },
      { science: 95 },
      { sports: 85 },
      { science: 99 }
    ]
  }
]

function studentWithHighestMarks (array = []) {
  let output = ''
  array.filter(students => {
    let highestMarks = 0
    let stuName = ''
    if (students.marks != undefined) {
      let sumOfArray = students.marks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
      if (highestMarks < sumOfArray) {
        highestMarks = sumOfArray
        stuName = students.name
        output = `${stuName} has highest total marks of ${highestMarks}`
      }
    }
  })
  return output
}

console.log(studentWithHighestMarks(student))

//************************************************************************************************
//   Question 2
//   Write a function to find the missing number in the array whose value ranges from 0 —> n,
//   Example 1
//   Let array = [ 4, 5, 2, 1, 0 ] , Here the missing number is 3, so you have to find it
//   Example 2
//   Let array = [2, 1, 0, 3, 7, 6,4, 5, 10, 9] , Here the missing number is 8, so you have to find it.
//   YOU HAVE TO USE ES6 FUNCTIONS (HOF’s) only.
//   Your function should look like
//   Function missingNumber(array, n) {
//   }

let array1 = [4, 5, 1, 0]
let array2 = [2, 1, 7, 6, 4, 5, 10, 9]
function missingNumber (array, n) {
  let missingNumArr = []
  if (n === 0) {
    if (!array.includes(n)) {
      missingNumArr.push(n)
    }
    return missingNumArr
  }
  missingNumArr = missingNumber(array, n - 1)
  if (!array.includes(n)) {
    missingNumArr.push(n)
  }
  return missingNumArr
}
console.log(missingNumber(array1, Math.max(array1)))
console.log(missingNumber(array2, Math.max(array2)))

//************************************************************************************************

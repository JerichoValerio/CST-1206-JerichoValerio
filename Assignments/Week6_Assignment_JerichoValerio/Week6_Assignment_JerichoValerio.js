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
//   FUNCTIONS (HOF’s) only.
//   Your function should look like
//   function studentWithHighestMarks(array) {
//   }

const highestMarks = []
const studentsWithHighestMarks = []

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

students.forEach(student => {
  student.subject.forEach(subject => {
    for (let key in subject) {
      var index = highestMarks.findIndex(obj => {
        return obj.subject === key
      })

      if (index === -1) {
        highestMarks.push({
          subject: key,
          marks: subject[key],
          students: [student.name]
        })
      } else if (highestMarks[index].marks < subject[key]) {
        highestMarks[index].marks = subject[key]
        highestMarks[index].students = [student.name]
      } else if (highestMarks[index].marks == subject[key]) {
        highestMarks[index].marks = subject[key]
        highestMarks[index].students.push(student.name)
      }
    }
  })
})

students.forEach(student => {
  let count = 0
  highestMarks.forEach(item => {
    if (item.students.includes(student.name)) {
      count++
    }
  })
  if (count >= 2) {
    studentsWithHighestMarks.push(student.name)
  }
})

console.log(studentsWithHighestMarks)

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

const arr = [3, 7, 8, 10, 11, 0, 2, 6, 1, 4, 5]
const findMissing = (arr = []) => {
  const sum = arr.reduce((acc, val) => acc + val)
  const { length: num } = arr
  const correctSum = (num * (num + 1)) / 2
  return (diff = correctSum - sum)
  return diff
}
console.log(findMissing(arr))

//************************************************************************************************
//   Question 3
//   Write a Express server where you will keep records of Employees
//   Write get and post api’s for getting all the employees and adding employee to the list
//   The object of Employee should look like
//   {
//   “Name” : “Daniel”,
//   “employeeId”: 100,
//   “Email” : “daniel@gmail.com”,
//   “Department” :”IT”
//   }
//   Please submit the code via GITHUB Repo.
//   Add the link of Github repo while submitting your code.
//   Your repository should have 2 folders
//   1. Programming questions (For first 2)
//   2. Express (For Express Application)

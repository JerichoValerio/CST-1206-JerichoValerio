const express = require('express')
const app = express()
const PORT = 5000

//* notes to self 404 error is not found
//* 200 is ok
//* 201 is created
//* 400 is bad request
//* npm i express
//* npm install -y
//* node

//! the employee list that was given

let employeeList = [
  {
    id: 1,
    name: 'Jericho',
    email: 'jerichovalerio@noogler.ca',
    employeeID: 100,
    department: 'IT',
    Salary: 980000
    //* I tweaked the salary to make it more interesting
  },
  {
    id: 2,
    name: 'Daniel',
    email: 'daniel@company.ca',
    employeeID: 101,
    department: 'HR',
    Salary: 16
  }
]

app.use(express.json())

app.get('/', (req, res) => {
  //* this is the root route

  res.send("Welcome to Jericho's Employee APIs!")
})

//todo 1st api get list employees
app.get('/employees', (req, res) => {
  return res.status(200).json({
    message: 'Successfully fetched the Employee List',
    data: employeeList
  })
})

//--------------------------------------------------------------

//todo 2nd api get list employees for given department
app.get('/employees/:department', (req, res) => {
  const departmentID = req.params.department
  const department = employeeList.filter(
    employee => employee.department === departmentID
  )

  //if department exists, return the list of employees

  if (department) {
    return res.status(200).json({
      message: 'Successfully fetched the Employee Department ist',
      data: department
    })

    //if department does not exist, return error message
  } else {
    return res.status(404).json({
      message: "ERROR Department Doesn't Exist"
    })
  }
})
//--------------------------------------------------------------


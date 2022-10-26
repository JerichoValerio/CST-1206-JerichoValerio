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

//todo 3rd api get list employees for given employee id
app.get('/employees/id/:employeeID', (req, res) => {
  const id = +req.params.employeeID
  const deathStar = employeeList.filter(employee => employee.employeeID === id)

  //if employee id exists, return the list of employees with that id

  if (deathStar) {
    return res.status(200).json({
      message: 'Successfully fetched the Employee ID list',
      data: deathStar
    })

    //if employee id does not exist, return error message
  } else {
    return res.status(404).json({
      message: "ERROR Department Doesn't Exist"
    })
  }
})

//--------------------------------------------------------------

//todo 4th api post new employee
app.post('/employees', (req, res) => {
  const data = req.body

  if (
    !data.name ||
    !data.email ||
    !data.employeeID ||
    !data.department ||
    !data.Salary
  ) {
    //if any of the fields are missing, return error message

    return res.status(500).json({
      message: 'ERROR: Please fill out all fields'
    })
  }

  data.id = employeeList.length + 1

  employeeList.push(data)

  return res.status(201).json({
    //if all fields are present, return success message

    message: 'Successfully fetched the Employee details',
    data: employeeList
  })
})
//--------------------------------------------------------------

//todo 5th api put update employee for given employeeID
app.put('/employees/id/:employeeID', (req, res) => {
  const id = +req.params.employeeID
  const postToUpdate = req.body
  if (
    !postToUpdate.name ||
    !postToUpdate.email ||
    !postToUpdate.employeeID ||
    !postToUpdate.department ||
    !postToUpdate.Salary
  ) {
    return res.status(500).json({
      message: 'ERROR Please fill out all fields'
    })
  }
  employeeList = employeeList.map(post => {
    if (post.employeeID == id) {
      post = postToUpdate
    }

    return post
  })

  return res.status(200).json({
    message: 'Successfully updated Employee ID',
    data: employeeList
  })
})
//--------------------------------------------------------------

//todo 6th api delete employee for given employeeID
app.delete('/employees/id/:employeeID', (req, res) => {
  const id = +req.params.employeeID
  const index = employeeList.findIndex(employee => {
    if (employee.employeeID == id) {
      return true
    }
  })

  if (index !== -1) {
    employeeList.splice(index, 1)

    return res.status(200).json({
      //if employee id exists, delete the employee with that id

      message: 'Successfully deleted the employee',
      data: employeeList
    })
  } else {
    return res.status(404).json({
      //if employee id does not exist, return error message

      message: "ERROR Employee Doesn't Exist"
    })
  }
})
//--------------------------------------------------------------

//todo Challenge api get list of employees for given salary range
app.get('/employees/salaries/highest', (req, res) => {
  employeeList.sort((greed, wealth) => {
    //sort the list of employees by salary in descending order

    return wealth.Salary - greed.Salary
  })

  return res.status(201).json({
    //return the list of employees with the highest salary

    message: 'The employee list sorted by how much money they make',
    data: employeeList
  })
})
//--------------------------------------------------------------

//todo show the server is running in terminal
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
})
//--------------------------------------------------------------



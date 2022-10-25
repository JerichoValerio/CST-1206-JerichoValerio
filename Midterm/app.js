const express = require('express')
const app = express()
const PORT = 5000
const employer = []

let employeeList = [
  {
    id: 1,
    name: 'Mike',
    email: 'mike@company.ca',
    employeeID: 100,
    department: 'IT',
    Salary: 100000
  },
  {
    id: 2,
    name: 'Daniel',
    email: 'daniel@company.ca',
    employeeID: 101,
    department: 'HR',
    Salary: 50000
  },
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to Employee APIs!")
})



//1st api get list employees
app.get('/employee', (req, res) => {
  return res.status(200).json(employeeList);
})

//--------------------------------------------------------------


//2nd api get list employees for given department name
app.get('/employee/:department', (req, res) => {
  const department = req.params.department;
  const employee = employeeList.find((employee) => {
    if (employee.department === department) {
      return true;
    }
  })
  return res.status(200).json(employee);
})
//--------------------------------------------------------------


//3rd api get list employees for given employee id
app.get('/employee/:employeeID', (req, res) => {
const id = req.params.id;
const employee = employeeList.find((employee) => {
if (employee.employeeID === id) {
return true;
}
})
return res.status(200).json(employee);
});
//--------------------------------------------------------------


//Creates Employees POST
  app.post('/employee', (req, res) => {
    const data = req.body;

    if 
  })
//--------------------------------------------------------------
// app.get('/api/v1/employees/:department', (req, res) => {
//   const department = req.params.department
//   const employee2 = employeeList.find(
//     employee2 => employee2.department === department
//   )
//   if (employee2) {
//     return res.status(200).json({
//       message: 'Successfully fetched the employee department',
//       data: employee2
//     })
//   } else {
//     return res.status(404).json({
//       message: 'Employee not found'
//     })
//   }
// })


//3rd api get list employees with employeeID

app.get('/api/v1/employees/:employeeID', (req, res) => {
  const employeeID = req.params.employeeID
  const employee3 = employeeList.find(
    employee3 => employee3.employeeID === employeeID
  )
  if (employee3) {
    return res.status(200).json({
      message: 'Successfully fetched the employee with employee ID',
      data: employee2,
      employee3
    })
  } else {
    return res.status(404).json({
      message: 'Employee not found'
    })
  }
})















app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

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

const express = require('express')

const app = express()
const PORT = 4000
const employeesArr = [
  {
    name: 'Jeffery Prab Bezos',
    income: 99999999999999999999,
    Employee_ID: 123,
    Position: 'Amazon Manager'
  }
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Employees APIs!')
})

app.get('/employees', (req, res) => {
  return res.status(200).json(employeesArr)
})

app.post('/employees', (req, res) => {
  const employeesData = req.body
  employeesArr.push(employeesData)

  return res.status(201).json(employeesArr)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

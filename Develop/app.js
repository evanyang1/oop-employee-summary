const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let name, email, id, role

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter employee name:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter employee email:'
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter employee id:'
  },
  {
    type: 'input',
    name: 'role',
    message: 'Enter employee role:'
  }
])
  .then(res => {
    name = res.name
    email = res.email
    id = res.id 
    role = res.role
    console.log(name, email, id)

    let html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>title</title>
    </head>
    <body>
      <h1>${name}</h1>
      <ul>
        <li>Email: ${email}</li>
        <li>Id: ${id}</li>
        <li>Role: ${role}</li>
      </ul>
    </body>
  </html>
`

    fs.writeFile(`${name}-${id}.html`, html, (e) => {
      if (e) console.error(e)
    })
  })


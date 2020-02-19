const inquirer = require('inquirer')

class Employee {
  constructor(name, id, title){
    this.name = name 
    this.id = id 
    this.title = title 
  }
  getName() { return this.name }
  getId() { return this.id }
  getTitle() { return this.title }
  getRole() { return 'Employee' }
}

class Manager extends Employee {
  constructor(name, id, title, officeNumber) {
    super(name, id, title)
    this.officeNumber = officeNumber
  }

  getRole() { return 'Manager'}
}

class Engineer extends Employee {
  constructor(name, id, title, github) {
    super(name, id, title)
    this.github = github
  }

  getGithub() { return this.github }

  getRole() { return 'Engineer' }
}

class Intern extends Employee {
  constructor(name, id, title, school) {
    super(name, id, title)
    this.school = school
  }
  getSchool() { return this.school }

  getRole() { return "Intern" }
}

///// End of Class Definition

let email, id, role

inquirer.prompt([
  {
    type: 'input',
    name: 'email',
    message: 'Enter employee email:'
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter employee id'
  },
  {
    type: 'input',
    name: 'role',
    message: 'Enter employee role:'
  }
])
  .then(res => {
    email = res.email
    id = res.id 
    role = res.role
  })

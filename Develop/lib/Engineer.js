const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, github, title) {
    super(name, id, title, email)
    this.github = github
  }

  getGithub() { return this.github }

  getRole() { return 'Engineer' }
}

module.exports = Engineer
const { models } = require('../models/index');

let id = 2;

const employees = {

  async index(request, response) {
    const employees = await models.Employee.findAll();
    response.render('employees', {
      employees: employees
    });
  },

  async addEmployee(request, response) {
    id++;
    await models.Employee.create({
      id: id,
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      company: request.body.company,
      email: request.body.email,
      phone: request.body.phone
    });
    response.redirect('/employees');
  }

};

module.exports = employees;


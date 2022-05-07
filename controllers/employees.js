const { models } = require('../models/index');

const employees = {

  async index(request, response) {
    const employees = await models.Employee.findAll();
    response.render('employees', {
      employees: employees
    });
  }

};

module.exports = employees;


const { models } = require('../models/index');

const employees = {

  async index(request, response) {
    const employees = await models.Employee.findAll({ include: models.Company });
    const companies = await models.Company.findAll();
    response.render('employees', {
      employees: employees,
      companies: companies
    });
  },

  async addEmployee(request, response) {
    await models.Employee.create({
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      companyId: request.body.companyId,
      email: request.body.email,
      phone: request.body.phone
    });
    response.redirect('/employees');
  },

  async deleteEmployee(request, response) {
    const employeeEmail = request.params.email;
    const employee = await models.Employee.findOne({
      where: {
        email: employeeEmail
      }
    });

    if (employee) {
      await employee.destroy();
      response.redirect('/employees');
    }
  }
};

module.exports = employees;


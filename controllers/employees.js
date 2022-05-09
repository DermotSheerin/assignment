const { models } = require('../models/index');

const employees = {

  async index(request, response) {
    const employees = await models.Employee.findAll();
    const companies = await models.Company.findAll(); // ================= possible find ALL employees and companies on main page where administrator gets to select to add a company or add an employee?
    response.render('employees', {
      employees: employees,
      companies: companies
    });
  },

  async addEmployee(request, response) {
    const company = await models.Company.findOne({
      where: {
        name: request.body.company
      }
    });

    if (company) {
      await models.Employee.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        companyId: company.id,
        email: request.body.email,
        phone: request.body.phone
      });
      response.redirect('/employees');
    }
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


const { models } = require('../models/index');

const employees = {

  async index(request, response) {
    try {
      // Create JOIN queries through Sequelize association to get company name displayed in view
      const employees = await models.Employee.findAll({ include: models.Company });
      const companies = await models.Company.findAll();
      response.render('employees', {
        employees: employees,
        companies: companies
      });
    } catch (err) {
      response.sendStatus(500);
    }
  },

  async addEmployee(request, response) {
    /**
     * @todo validation before write to DB
     */

    try {
      await models.Employee.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        companyId: request.body.companyId,
        email: request.body.email,
        phone: request.body.phone
      });
      response.redirect('/employees');
    } catch (err) {
      response.sendStatus(500);
    }
  },

  async deleteEmployee(request, response) {
    const employeeEmail = request.params.email;
    try {
      const employee = await models.Employee.findOne({
        where: {
          email: employeeEmail
        }
      });
      if (employee) {
        await employee.destroy();
        response.redirect('/employees');
      }
    } catch (err) {
      response.sendStatus(500);
    }
  },

  async updateEmployee(request, response) {
    /**
     * @todo Implement update employee operation
     */
  }
};

module.exports = employees;


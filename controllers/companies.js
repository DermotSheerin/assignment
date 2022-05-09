const { models } = require('../models/index');

const companies = {

  async index(request, response) {
    const companies = await models.Company.findAll();
    response.render('companies', {
      companies: companies
    });
  },

  async addCompany(request, response) {
    try {
      await models.Company.create({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        website: request.body.website
      });
      response.redirect('/companies');
    } catch (err) {
      response.sendStatus(500);
    }
  },

  // async deleteEmployee(request, response) {
  //   const employeeEmail = request.params.email;
  //   const employee = await models.Employee.findOne({
  //     where: {
  //       email: employeeEmail
  //     }
  //   });
  //
  //   if (employee) {
  //     await employee.destroy();
  //     response.redirect('/employees');
  //   }
  // }
};

module.exports = companies;


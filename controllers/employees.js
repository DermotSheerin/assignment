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
  },

  async deleteEmployee(request, response) {
    const employeeEmail = request.params.email;
    console.log(`employeeEmail inside deleteEmployee: ${employeeEmail}`);
    //const findEmployee = await this.findEmployee(request.body.email);
    const findEmployee = await employees.findEmployee(employeeEmail);

    if (findEmployee) {
      await findEmployee.destroy();
      response.redirect('/employees');
    }
  },

  async findEmployee(email) {
    return await models.Employee.findOne({
      where: {
        email: email
      }
    });
  }

  // async findEmployee(request, response) {
  //   return await models.Employee.findOne({
  //     where: {
  //       email: request.body.email
  //     }
  //   })
  // }

};

module.exports = employees;


const { models } = require('../models/index');

const employeesApi = {

  async getAllEmployees(request, response) {
    try {
      const employees = await models.Employee.findAll();
      response.status(200).json(employees);
    } catch (err) {
      response.sendStatus(500);
    }
  },

  async addEmployee(request, response) {
    try {
      const newEmployee = await models.Employee.create(request.body);
      response.status(200).json(newEmployee);
    } catch (err) {
      response.sendStatus(500);
    }
  },

  async deleteEmployee(request, response) {
    try {
      const employee = await models.Employee.findOne({
        where: {
          email: request.params.email
        }
      });
      if (employee) {
        await employee.destroy();
        response.status(200).json(employee);
      }
    } catch (err) {
      response.sendStatus(500);
    }
  },
};

module.exports = employeesApi;


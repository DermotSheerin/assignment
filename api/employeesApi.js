const { models } = require('../models/index');

const employeesApi = {

  async getAllEmployees(request, response) {
    try {
      const employees = await models.Employee.findAll();
      response.status(200).json(employees);
    } catch (err) {
      response.sendStatus(500);
    }
  }
};

module.exports = employeesApi;


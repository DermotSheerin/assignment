const { models } = require('../models/index');

const employeesApi = {

  async getAllEmployees(request, response) {
    const employees = await models.Employee.findAll();
    response.status(200).json(employees)
  }
};

module.exports = employeesApi;


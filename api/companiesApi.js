const { models } = require('../models/index');

const companiesApi = {

  async getAllCompanies(request, response) {
    try {
      const companies = await models.Company.findAll();
      response.status(200).json(companies);
    } catch (err) {
      response.sendStatus(500);
    }
  }
};

module.exports = companiesApi;


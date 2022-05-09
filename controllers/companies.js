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

  async deleteCompany(request, response) {
    const companyId = request.params.id;
    try {
      const company = await models.Company.findOne({
        where: {
          id: companyId
        }
      });
      if (company) {
        await company.destroy();
        response.redirect('/companies');
      }
    } catch (err) {
      response.sendStatus(500);
    }
  }
};

module.exports = companies;


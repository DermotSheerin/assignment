const { models } = require('../models/index');
const { createToken } = require('../jwtUtils/utils');

const adminApi = {

  async loginAuthentication(request, response) {
    const { email, password } = request.body;
    try {
      const admin = await models.Admin.findOne({
        where: {
          email: email
        }
      });
      if (admin && (admin.password === password)) {
        const token = createToken({ email: email });
        admin.dataValues.token = token;
        response.status(200).send(admin);
      } else response.sendStatus(404);
    } catch (err) {
      response.sendStatus(500);
    }
  }
};

module.exports = adminApi;


const { models } = require('../models/index');

const accounts = {

  showLogin(request, response) {
    const viewData = {
      title: 'Login Dermots Company'
    };
    response.render('login', viewData);
  },

  showSignup(request, response) {
    const viewData = {
      title: 'Signup Dermots Company'
    };
    response.render('signup', viewData);
  },

  async login(request, response) {
    const { email, password } = request.body;
    try {
      const admin = await models.Admin.findOne({
        where: {
          email: email
        }
      });

      if (admin && (admin.password === password)) {
        response.redirect('employees');
      } else console.log(`accounts controller: admin does not exist !!!!`)

    } catch (err) {
      console.log(`accounts controller: login catch error: ${err}`)

    }
  },

  signup(request, response) {
    response.redirect('login');
  }

};

module.exports = accounts;


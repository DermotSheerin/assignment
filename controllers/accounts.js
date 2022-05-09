const { models } = require('../models/index');
const { createToken } = require('../jwtUtils/utils');

const accounts = {

  async index(request, response) {
    // Create JOIN queries through Sequelize association to get company name displayed in view
    // const employees = await models.Employee.findAll({ include: models.Company });
    // const companies = await models.Company.findAll();
    response.render('dashboard');
  },

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
        const token = createToken({ email: email });
        // set store token in cookie with exp time 1hr
        response.cookie('token', token, { maxAge: 3600000 });
        response.redirect('dashboard');
      } else {
        console.log(`accounts controller: admin does not exist !!!!`);
        // response.sendStatus(404);
        response.render('login', {
          title: 'Sign in error',
          errors: 'admin user details incorrect !!!!'
        });
      }

    } catch (err) {
      console.log(`accounts controller: login catch error: ${err}`);

    }
  },

  async signup(request, response) {
    await models.Admin.create({
      email: request.body.email,
      password: request.body.password
    });
    response.redirect('login');
  }

};

module.exports = accounts;


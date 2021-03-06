const { validationResult } = require('express-validator');

const { models } = require('../models/index');
const { createToken } = require('../jwtUtils/utils');

const accounts = {

  async index(request, response) {
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
        response.render('login', {
          errors: [{ param: 'Sign in error', msg: 'Admin user details incorrect !!!!' }]
        });
      }
    } catch (err) {
      response.sendStatus(500);
    }
  },

  async signup(request, response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        response.render('signup', {
          errors: errors.array()
        });
      } else {
        const { email } = request.body;
        const admin = await models.Admin.findOne({
          where: {
            email: email
          }
        });
        if (admin) {
          response.render('signup', {
            errors: [{ param: 'Signup error', msg: 'Admin user already exists !!' }]
          });
        } else {
          await models.Admin.create({
            email: request.body.email,
            password: request.body.password
          });
          response.redirect('login');
        }
      }
    } catch (err) {
      response.sendStatus(500);
    }
  },

  logout(request, response) {
    response.clearCookie('token'); // we can clear the session
    response.status(200).redirect('/');
  }

};

module.exports = accounts;


const accounts = {

  showLogin(request, response) {
    const viewData = {
      title: "Login Dermots Company",              // title for the browser tab
    };
    response.render('login', viewData);
  },

  showSignup(request, response) {
    const viewData = {
      title: "Signup Dermots Company",              // title for the browser tab
    };
    response.render('signup', viewData);
  },

  login(request, response) {
    response.redirect('employees');
  },

  signup(request, response) {
    response.redirect('login');
  },

};

module.exports = accounts;


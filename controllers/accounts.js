const accounts = {

  showLogin(request, response) {
    const viewData = {
      title: "Login Dermots Company",              // title for the browser tab
    };
    response.render('login', viewData);
  },

};

module.exports = accounts;


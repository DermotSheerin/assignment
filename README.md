# Project - A basic backend application to manage companies and their employees

Name: Dermot Sheerin

## Overview.
Main Project Requirements
 + Basic JWT Authentication: ability to log in as administrator
 + Use Node, Express, Sequelize, JWT
 + Create Express routing to demonstrate CRUD functionality (Create / Read / Update / Delete) for two API items: Companies and Employees 
 + Use Express validation middleware to demonstrate basic payload validation
 + Use Express middleware to enforce authorisation
 + Demonstrate the use of DB transactions where applicable  
 + Companies DB table consists of these fields: Name (required), email, phone, website
 + Employees DB table consists of these fields: First name (required), last name (required), Company (foreign key to Companies), email, phone
 + Create Integration tests for all API’s, all tests should pass. Use Jest or Mocha.
 + Create a professional README with instructions on how to install and test
 + Project to be uploaded to GitHub so the source code can be reviewed when finished.
Software implementation minimal specification – latest Node, Express – PostgreSQL or MySQL

Requirements not implemented yet: 
 + Company/Employee Update functionality
 + Use of Express validation middleware to demonstrate basic payload validation


## Setup requirements.
 + Install PostgreSQL on your local machine
 + Within the project folder run 'npm install' followed by 'npm start' to start the application
 + Access the application at the following URL http://localhost:3000/ 
 + Create an administrator user via the Signup Link on the homepage, if successful the administrator will be redirected to the login page
 + On successful login the administrator will be presented with two links to access, (1) Companies and (2) Employees
 + On the Companies page the administrator can: 
   - view existing companies
   - create new companies
   - delete existing companies (this will cascade and delete all employees assigned to this company)
 + On the Employees page the administrator can: 
   - view existing employees
   - create new employees and select the relevant company from a drop down list
   - delete existing employees
 + The administrator can navigate between companies and employees from the top navigation bar when logged in
 + The administrator can logout from the top navigation bar


## APIs
 + There are 3 APIs available, additional API routes will be added in the future
   - Admin API
   - Company API
   - Employee API

## Integration tests for API’s
The Mocha 'API tests' suite can be accessed from the test folder in the project root directory. The test folder contains 4 test files:
 - auth-api-test.js file: login/authentication test
 - companyEmployee-service.js: service class to deliver client-side api to the remote service
 - company-api-test.js: company tests
 - employee-api-test.js: employee tests
 
The Jest 'API tests' suite can be accessed from the __test__ folder in the project root directory. The suite of tests can be ran from the userToken.spec.js file.

### Routing - includes some protected routes, handled by the authenticateToken middleware

#### Accounts
- router.get('/login', Accounts.showLogin);
- router.post('/login', Accounts.login);
- router.get('/signup', Accounts.showSignup);
- router.post('/signup', Accounts.signup);
- router.get('/logout', Accounts.logout);

#### Dashboard
- router.get('/dashboard', authenticateToken, Accounts.index);

#### Employees 
- router.get('/employees', authenticateToken, Employees.index);
- router.post('/employees', authenticateToken, Employees.addEmployee);
- router.get('/employees/deleteEmployee/:email', authenticateToken, Employees.deleteEmployee);

#### Companies 
- router.get('/companies', authenticateToken, Companies.index);
- router.post('/companies', authenticateToken, Companies.addCompany);
- router.get('/companies/deleteCompany/:id', authenticateToken, Companies.deleteCompany);

#### APIs
- router.get('/api/employees', EmployeesAPI.getAllEmployees);
- router.post('/api/employees', EmployeesAPI.addEmployee);
- router.get('/api/employees/deleteEmployee/:email', EmployeesAPI.deleteEmployee);
- router.get('/api/companies', CompanyAPI.getAllCompanies);
- router.post('/api/admin/login', AdminAPI.loginAuthentication);
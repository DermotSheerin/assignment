const express = require('express');
const router = express.Router();

const Employees = require('../controllers/employees');
const EmployeesAPI = require('../api/employeesApi');
const Accounts = require('../controllers/accounts');
const Companies = require('../controllers/companies');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main', { title: 'Main Menu' });
});

/* Accounts routes */
router.get('/login', Accounts.showLogin);
router.post('/login', Accounts.login);
router.get('/signup', Accounts.showSignup);
router.post('/signup', Accounts.signup);

/* Employees page. */
router.get('/employees', Employees.index);
router.post('/employees', Employees.addEmployee);
router.get('/employees/deleteEmployee/:email', Employees.deleteEmployee);

/* Companies page. */
router.get('/companies', Companies.index);
router.post('/companies', Companies.addCompany);

/* API Get all employees */
router.get('/api/employees', EmployeesAPI.getAllEmployees);

module.exports = router;

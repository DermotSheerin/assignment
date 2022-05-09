const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../jwtUtils/utils');

const Employees = require('../controllers/employees');
const Accounts = require('../controllers/accounts');
const Companies = require('../controllers/companies');

const EmployeesAPI = require('../api/employeesApi');
const AdminAPI = require('../api/adminApi');

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
router.get('/employees', authenticateToken, Employees.index);
router.post('/employees', Employees.addEmployee);
router.get('/employees/deleteEmployee/:email', authenticateToken, Employees.deleteEmployee);

/* Companies page. */
router.get('/companies', authenticateToken, Companies.index);
router.post('/companies', authenticateToken, Companies.addCompany);

/* API Get all employees */
/**
 * @todo add further APIs
 */
router.get('/api/employees', EmployeesAPI.getAllEmployees);
router.post('/api/admin/login', AdminAPI.loginAuthentication);

module.exports = router;

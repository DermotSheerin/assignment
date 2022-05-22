const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../jwtUtils/utils');
const { body } = require('express-validator');

const Employees = require('../controllers/employees');
const Accounts = require('../controllers/accounts');
const Companies = require('../controllers/companies');

const EmployeesAPI = require('../api/employeesApi');
const CompanyAPI = require('../api/companiesApi');
const AdminAPI = require('../api/adminApi');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main');
});

/* Accounts routes */
router.get('/login', Accounts.showLogin);
router.post('/login', Accounts.login);
router.get('/signup', Accounts.showSignup);
router.post('/signup',
  // username must be an email, normalizeEmail to convert the emails entered into the standard approved format
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid Email format'),
  // password must be at least 5 chars long
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),
  Accounts.signup);
router.get('/logout', Accounts.logout);

/* Landing page. */
router.get('/dashboard', authenticateToken, Accounts.index);

/* Employees page. */
router.get('/employees', authenticateToken, Employees.index);
router.post('/employees', authenticateToken, Employees.addEmployee);
router.get('/employees/deleteEmployee/:email', authenticateToken, Employees.deleteEmployee);

/* Companies page. */
router.get('/companies', authenticateToken, Companies.index);
router.post('/companies', authenticateToken, Companies.addCompany);
router.get('/companies/deleteCompany/:id', authenticateToken, Companies.deleteCompany);

/* API routes */
/**
 * @todo add further APIs and add authentication using JWT
 */
router.get('/api/employees', EmployeesAPI.getAllEmployees);
router.post('/api/employees', EmployeesAPI.addEmployee);
router.get('/api/employees/deleteEmployee/:email', EmployeesAPI.deleteEmployee);
router.get('/api/companies', CompanyAPI.getAllCompanies);
router.post('/api/admin/login', AdminAPI.loginAuthentication);

module.exports = router;

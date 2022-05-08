const express = require('express');
const router = express.Router();

const Employees = require('../controllers/employees');
const Accounts = require('../controllers/accounts');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main', { title: 'Main Menu' });
});

/* Accounts routes */
router.get('/login', Accounts.showLogin);

/* GET companies page. */
router.get('/companies', (req, res, next) => {
  res.send('got to companies in new router 77');
});

/* Employees page. */
router.get('/employees', Employees.index);
router.post('/employees', Employees.addEmployee);
router.get('/employees/deleteEmployee/:email', Employees.deleteEmployee);

module.exports = router;

const express = require('express');
const router = express.Router();

const Employees = require('../controllers/employees');
const Accounts = require('../controllers/accounts');

/* API Get all employees */
router.get('/api/employees', (req, res, next) => {
    res.render('main', {title: 'Main Menu'});
});


module.exports = router;

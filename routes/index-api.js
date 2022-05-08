const express = require('express');
const router = express.Router();

const EmployeesAPI = require('../api/employeesApi');

/* API Get all employees */
router.get('/api/employees', EmployeesAPI.getAllEmployees);


module.exports = router;

'use strict';
const assert = require('chai').assert;
const CompanyEmployeeService = require('./companyEmployee-service');

suite('employee API tests', function() {
  const baseUrl = 'http://localhost:3000';
  const companyEmployeeService = new CompanyEmployeeService(baseUrl);

  const employee1 = {
    first_name: 'Dermot',
    last_name: 'Sheerin',
    companyId: 5,
    email: 'ds@currentcompany.com',
    phone: '112233'
  };

  /**
   * @todo Implement setup/teardown and more test cases
   */

  suiteSetup(async function() {

  });

  test('create new employee', async function() {
    const newEmployee = await companyEmployeeService.addEmployee(employee1);
    assert.equal(employee1.email, newEmployee.data.email)
  });

  test('getAllEmployees and verify data returned', async function() {
    const employees = await companyEmployeeService.getAllEmployees();
    // verify return status is 200
    assert.equal(200, employees.status);
    // verify companies data is present
    assert.isDefined(employees.data);
    // verify email field is present
    assert.isDefined(employees.data[0].email);
  });

});

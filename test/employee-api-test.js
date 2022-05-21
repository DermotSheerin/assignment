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
    assert.equal(employee1.email, newEmployee.data.email);
  });

  test('getAllEmployees and verify data returned BEFORE employee1 delete', async function() {
    const employees = await companyEmployeeService.getAllEmployees();
    // verify return status is 200
    assert.equal(200, employees.status);
    // verify employees data is present
    assert.isDefined(employees.data);
    // verify email field is present
    assert.isDefined(employees.data[0].email);
    // verify employee table contains 2 employees
    assert.equal(2, employees.data.length);
  });

  test('delete new employee', async function() {
    const deleteEmployee = await companyEmployeeService.deleteEmployee(employee1.email);
    // verify return status is 200
    assert.equal(200, deleteEmployee.status);
    // verify email field is present
    assert.equal(employee1.email, deleteEmployee.data.email);
    // verify employees data is present
    assert.isDefined(deleteEmployee.data);
  });

  test('getAllEmployees and verify data returned AFTER delete employee1', async function() {
    const employees = await companyEmployeeService.getAllEmployees();
    // verify return status is 200
    assert.equal(200, employees.status);
    // verify employees data is present
    assert.isDefined(employees.data);
    // verify email field is present
    assert.isDefined(employees.data[0].email);
    // verify employee table contains 1 employee after employee1 delete
    assert.equal(1, employees.data.length);
  });

});

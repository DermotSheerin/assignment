'use strict';
const assert = require('chai').assert;
const CompanyEmployeeService = require('./companyEmployee-service');

suite('API tests', function() {
  const baseUrl = 'http://localhost:3000';
  const companyEmployeeService = new CompanyEmployeeService(baseUrl);

  /**
   * @todo Implement setup/teardown and more test cases
   */

  test('loginAuthentication', async function() {
    const employee = await companyEmployeeService.loginAuthentication();
    assert.isDefined(employee);
    assert.isDefined(employee.token);
  });

  test('getAllCompanies', async function() {
    const companies = await companyEmployeeService.getAllCompanies();
    assert.isDefined(companies);
  });

  test('getAllEmployees', async function() {
    const employees = await companyEmployeeService.getAllEmployes();
    assert.isDefined(employees);
  });
});

'use strict';
const assert = require('chai').assert;
const CompanyEmployeeService = require('./companyEmployee-service');

suite('company API tests', function() {
  const baseUrl = 'http://localhost:3000';
  const companyEmployeeService = new CompanyEmployeeService(baseUrl);

  /**
   * @todo Implement setup/teardown and more test cases
   */

  test('getAllCompanies and verify data returned', async function() {
    const companies = await companyEmployeeService.getAllCompanies();
    // verify return status is 200
    assert.equal(200, companies.status);
    // verify companies data is present
    assert.isDefined(companies.data);
    // verify company ID field is present
    assert.isDefined(companies.data[0].id);
  });

});

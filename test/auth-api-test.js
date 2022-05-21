'use strict';
const assert = require('chai').assert;
const CompanyEmployeeService = require('./companyEmployee-service');

suite('login authentication API tests', function() {
  const baseUrl = 'http://localhost:3000';
  const companyEmployeeService = new CompanyEmployeeService(baseUrl);

  /**
   * @todo Implement setup/teardown and more test cases
   */

  test('loginAuthentication and verify data returned', async function() {
    const user = await companyEmployeeService.loginAuthentication();
    // verify return status is 200
    assert.equal(200, user.status);
    // verify user data is present
    assert.isDefined(user.data);
    // verify user token is present
    assert.isDefined(user.data.token);
  });
});

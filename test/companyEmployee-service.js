'use strict';
const axios = require('axios');

class CompanyEmployeeService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async loginAuthentication() {
    try {
      const formData = new URLSearchParams();
      formData.append('email', 'admin@test.com');
      formData.append('password', '1234');
      const response = await axios.request({
        url: `${this.baseUrl}/api/admin/login`,
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: formData
      });
      return response;
    } catch (e) {
      return null;
    }
  }

  async addEmployee(employee) {
    try {
      const formData = new URLSearchParams();
      formData.append('first_name', employee.first_name);
      formData.append('last_name', employee.last_name);
      formData.append('companyId', employee.companyId);
      formData.append('email', employee.email);
      formData.append('phone', employee.phone);
      const response = await axios.request({
        url: `${this.baseUrl}/api/employees`,
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: formData
      });
      return response;
    } catch (e) {
      return null;
    }
  }

  async deleteEmployee(employeeEmail) {
    try {
      const response = await axios.request({
        url: `${this.baseUrl}/api/employees/deleteEmployee/${employeeEmail}`,
        method: 'GET'
      });
      return response;
    } catch (e) {
      return null;
    }
  }

  async getAllEmployees() {
    try {
      const response = await axios.request({
        url: `${this.baseUrl}/api/employees`,
        method: 'GET'
      });
      return response;
    } catch (e) {
      return null;
    }
  }

  async getAllCompanies() {
    try {
      const response = await axios.request({
        url: `${this.baseUrl}/api/companies`,
        method: 'GET'
      });
      return response;
    } catch (e) {
      return null;
    }
  }
}

module.exports = CompanyEmployeeService;

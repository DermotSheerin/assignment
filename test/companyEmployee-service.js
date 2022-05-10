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
      return response.data;
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
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async getAllEmployes() {
    try {
      const response = await axios.request({
        url: `${this.baseUrl}/api/employees`,
        method: 'GET'
      });
      return response.data;
    } catch (e) {
      return null;
    }
  }
}

module.exports = CompanyEmployeeService;

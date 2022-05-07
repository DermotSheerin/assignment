const pool = require('../postgres-node/queries');

const employeesApi = {

  getAllEmployees(request, response) {
    pool.query('SELECT * FROM employees', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
};

module.exports = employeesApi;


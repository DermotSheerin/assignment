const request = require('supertest');
const app = require('../app');

describe('Admin user login', () => {
  // pass in done as expect is asynchronous
  it('returns 200 OK when user login is valid', (done) => {
    request(app).post('/api/admin/login')
      .send({
        email: 'admin@test.com',
        password: '1234'
      }).then((response) => {
      expect(response.status).toBe(200);
      done();
    });

  });

  it('returns email of successful admin user login', (done) => {
    request(app).post('/api/admin/login')
      .send({
        email: 'admin@test.com',
        password: '1234'
      }).then((response) => {
      expect(response.body.email).toBe('admin@test.com');
      done();
    });

  });

  it('verifies a token is created for admin user during login', (done) => {
    request(app).post('/api/admin/login')
      .send({
        email: 'admin@test.com',
        password: '1234'
      }).then((response) => {
      expect(response.body.token).toBeDefined();
      done();
    });

  });
});
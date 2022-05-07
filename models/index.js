const { Sequelize, Model, DataTypes } = require('sequelize');

const getEmployeeModel = require('./employee');

const sequelize = new Sequelize(
  DATABASE = 'employee',
  '127.0.0.1',
  'assignment',
  DATABASE_USER = 'postgres',
  DATABASE_PASSWORD = 'postgres',
  {
    dialect: 'postgres'
  }
);

const models = {
  Employee: getEmployeeModel(sequelize, DataTypes)
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  sequelize: sequelize,
  models: models
};
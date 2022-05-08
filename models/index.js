// DB Model using Sequalize ORM
const { Sequelize, DataTypes } = require('sequelize');

const getEmployeeModel = require('./employee');
const getCompanyModel = require('./company');
const getAdminModel = require('./admin');

const sequelize = new Sequelize(
  DATABASE = 'assignment',
  DATABASE_USER = 'postgres',
  DATABASE_PASSWORD = 'postgres',
  {
    dialect: 'postgres'
  }
);

const models = {
  Company: getCompanyModel(sequelize, DataTypes),
  Employee: getEmployeeModel(sequelize, DataTypes),
  Admin: getAdminModel(sequelize, DataTypes)
};

models.Company.associate = function(models) {
  models.Company.hasMany(models.Employee);
};

models.Employee.associate = function(models) {
  models.Employee.belongsTo(models.Company, { onDelete: 'CASCADE' });
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
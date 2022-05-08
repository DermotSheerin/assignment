const getEmployeeModel = require('./employee');

// create company table if not defined
const getCompanyModel = (sequelize, DataTypes) => {
  return sequelize.define('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      website: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
          notEmpty: false
        }
      }
    },
    {
      timestamps: false
    }
  );
};

module.exports = getCompanyModel;
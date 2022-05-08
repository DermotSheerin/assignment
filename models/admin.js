// DB Model using Sequalize ORM

// create admin table if not defined
const getAdminModel = (sequelize, DataTypes) => {
  return sequelize.define('admin', {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      timestamps: false
    }
  );
};

module.exports = getAdminModel;
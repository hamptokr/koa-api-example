'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    given_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};
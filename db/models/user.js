'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.belongsToMany(models.Board, 
      { through: 'User_Boards' }
      );
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};
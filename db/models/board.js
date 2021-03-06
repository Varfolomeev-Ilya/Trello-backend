'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Board.hasMany(models.Column, {
        foreignKey: 'boardId',
        onDelete: 'cascade'
      });
      Board.belongsTo(models.User, {
        foreignKey: 'userId'
      }
      );
    }
  };
  Board.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    columnsPosition: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    }
  },
    {
      sequelize,
      modelName: 'Board',
    });
  return Board;
};
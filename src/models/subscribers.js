'use strict';
const { Model } = require('sequelize');

const { NODE_ENV } = process.env;

module.exports = (sequelize, DataTypes) => {
  class Subscribers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Subscribers.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },

      domain: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'ACTIVE',
        allowNull: false,
      },
      features: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: 'Subscribers',
      tableName: 'subscribers',
      timestamps: false
    }
  );
  return Subscribers;
};

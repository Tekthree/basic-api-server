
'use strict';

const dogsModel = (sequelize, DataTypes) => {
  return sequelize.define('Dogs', {
    breed: {
      type: DataTypes.STRING,
      required: true,
    },
    age: {
      type: DataTypes.INTEGER,
      required: false
    }
  });
}

module.exports = dogsModel;
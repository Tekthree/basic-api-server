
'use strict';

const songsModel = (sequelize, DataTypes) => {
  return sequelize.define('Songs', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    year: {
      type: DataTypes.INTEGER,
      required: false
    }
  });
}

module.exports = songsModel;
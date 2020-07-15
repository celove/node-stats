'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stats_jogos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stats_jogos.init({
    jogador1: DataTypes.STRING,
    jogador2: DataTypes.STRING,
    gols1: DataTypes.INTEGER,
    gols2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stats_jogos',
  });
  return stats_jogos;
};
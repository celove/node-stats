'use strict';

const stats_jogos = require("../models/stats_jogos");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('stats_jogos', 'data', Sequelize.DATE);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Todo',
      'completed'
    );
  } 
}
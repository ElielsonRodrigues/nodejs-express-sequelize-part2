'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('categorias', 'deletedAt', {
      allowNull: true, /* INDICA QUE A COLUNA PODE SER NULLA */
      type: Sequelize.DATE /* PODE SER NULLO */

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('categorias', 'deletedAt');
  }
};
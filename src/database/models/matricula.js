'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Pessoa, {
        foreignKey: 'estudante_id'
      });
      Matricula.belongsTo(models.Curso, {
        foreignKey: 'curso_id'
      })
    }
  }
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matriculas',
    paranoid: true /* Soft Delete */
  });
  return Matricula;
};

/* Esse processo é o que chamamos de Soft Delete
  (exclusão suave) e ele é uma estratégia
  muito comum de dados.
  Se é muito comum, provavelmente o
  SQLite tem uma forma de trabalhar com ela,
  e no SQLite chamamos isso de Paranoid. 
*/
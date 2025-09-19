'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });
      Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });

      Curso.hasMany(models.Matricula, {
        foreignKey: 'curso_id'
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos',
    paranoid: true /* Soft Delete */

  });
  return Curso;
};

/* Esse processo é o que chamamos de Soft Delete
  (exclusão suave) e ele é uma estratégia
  muito comum de dados.
  Se é muito comum, provavelmente o
  SQLite tem uma forma de trabalhar com ela,
  e no SQLite chamamos isso de Paranoid. 
*/
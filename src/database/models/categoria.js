'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Curso, {
        foreignKey: 'categoria_id'
      });
    }
  }
  Categoria.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias', 
    paranoid: true /* Soft Delete */
  });
  return Categoria;
};

/* Esse processo é o que chamamos de Soft Delete
  (exclusão suave) e ele é uma estratégia
  muito comum de dados.
  Se é muito comum, provavelmente o
  SQLite tem uma forma de trabalhar com ela,
  e no SQLite chamamos isso de Paranoid. 
*/
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasOne(models.Curso, {
        foreignKey: 'docente_id'
      });
      Pessoa.hasOne(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' }, /* RETIRANDO O SCOP TRAS TODAS AS MATRICULAS */
        as: 'aulasMatriculadas' /*Ajuda nas associação mixins que sera usando em pessoa service */
      });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas'
  });
  return Pessoa;
};
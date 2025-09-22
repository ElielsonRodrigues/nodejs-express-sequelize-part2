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
    tableName: 'pessoas',
    paranoid: true, /* Soft Delete */
    defaultScope: { /* Utilizando metodolodia de escopo padrão do
                       ORM sequelize, Referente ao requisito 
                       numero 2 do cliente 
                    */
      where: {
        ativo: true // retorna somente os ativos
      }
    },
    // aqui podemos inlcuir varios escopos com diferente clausulas
    scopes: {
      findAllData: { // nome do meu escopo
        where: {} // clausula ou condição, retorna todos os registros
      }
    }
  });
  return Pessoa;
};

/* Esse processo é o que chamamos de Soft Delete
  (exclusão suave) e ele é uma estratégia
  muito comum de dados.
  Se é muito comum, provavelmente o
  SQLite tem uma forma de trabalhar com ela,
  e no SQLite chamamos isso de Paranoid. 
*/
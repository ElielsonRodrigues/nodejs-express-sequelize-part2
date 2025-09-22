'use strict';
const {
  Model
} = require('sequelize');


const cpfIsValid = require('../../utils/isValidCpfHelpers.js');


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
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: { /* conta a quantidade da caracteres */
          args: [3, 30], /* primeiro parametro minimo, segundo maximo */
          msg: "O campo de 'nome' deve conter no 'min. 3' e no 'max. 30' caractetes"
        }
      }
    },
    email: { /* exemplo de como usar valdações no modelo */
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Informe um 'email'valido."
        }
      }
    },
    cpf: { /* Exemplo criando uma validação personalizada pro CPF */
      type: DataTypes.STRING,
      validate: {
        cpfValid: (cpf) => {
          if (!cpfIsValid(cpf)) {
            throw new Error(`O '${cpf}' é inválido. Informe um CPF válido`);
          }
        }
      }
    },
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
        where: {} // clausula ou condição, no caso retorna todos os registros
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
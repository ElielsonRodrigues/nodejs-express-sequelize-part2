const dataSource = require('../database/models');

const Services = require("./Service.js");

class PessoaService extends Services {

    /*HERDANDO OS METODOS DA MINHA CLASSE GENERICA DE SERVICE E 
    ATRIBUINDO MINHA MODEL PESSOA ATRAVÉS DO CONSTRUTOR */
    constructor() {
        super('Pessoa');
        this.matriculaSerivce = new Services('Matricula');
    }

    async findMatriculasAtivasByEstudanteId(id) {
        const estudante = await super.findById(id);
        const listMatriculas = await estudante.getMatriculasAtivas();
        return listMatriculas;
    }

    async findMatriculasByEstudanteId(id) {
        const estudante = await super.findById(id);
        const listMatriculas = await estudante.getTodasMatriculas();
        return listMatriculas;
    }

    async findDataScope() {
        // passa o nome do meu scopo da model de pessoa 'findAllData'
        const resultList = await super.findDataScope('findAllData');
        return resultList;
    }

    async cancelRecordMatriculaByEstudanteId(estudanteId) {
        return dataSource.sequelize.transaction(async (transacao) => {

            await super.update({ id: estudanteId },
                { ativo: false },
                transacao);
            await this.matriculaSerivce.update(
                { estudante_id: estudanteId },
                { status: 'cancelado' },
                transacao);

        });
    }

}

module.exports = PessoaService;
const Services = require("./Service.js");

class PessoaService extends Services {

    /*HERDANDO OS METODOS DA MINHA CLASSE GENERICA DE SERVICE E 
    ATRIBUINDO MINHA MODEL PESSOA ATRAVÉS DO CONSTRUTOR */
    constructor() {
        super('Pessoa');
    }

    async findMatriculaByEstudanteId(id) {
        const estudante = await super.findById(id);
        const listMatriculas = await estudante.getAulasMatriculadas();
        return listMatriculas;
    }
}

module.exports = PessoaService;
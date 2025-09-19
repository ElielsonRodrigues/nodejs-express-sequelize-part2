const Services = require("./Service.js");

class CursoService extends Services {

    /*HERDANDO OS METODOS DA MINHA CLASSE GENERICA DE SERVICE E 
    ATRIBUINDO MINHA MODEL CURSO ATRAVÉS DO CONSTRUTOR */
    constructor() {
        super('Curso');
    }
}

module.exports = CursoService;
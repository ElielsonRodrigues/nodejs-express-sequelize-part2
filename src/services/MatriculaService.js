const Services = require("./Service.js");

class MatriculaService extends Services {

    /*HERDANDO OS METODOS DA MINHA CLASSE GENERICA DE SERVICE E 
    ATRIBUINDO MINHA MODEL MATRICULA ATRAVÉS DO CONSTRUTOR */
    constructor() {
        super('Matricula');
    }
}

module.exports = MatriculaService;
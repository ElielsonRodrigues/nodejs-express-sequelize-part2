const Services = require("./Service.js");

class CategoriaService extends Services {

    /*HERDANDO OS METODOS DA MINHA CLASSE GENERICA DE SERVICE E 
    ATRIBUINDO MINHA MODEL CATEGORIA ATRAVÉS DO CONSTRUTOR */
    constructor() {
        super('Categoria');
    }
}

module.exports = CategoriaService;
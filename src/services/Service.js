const dataSource = require('../database/models');

class Services {

    constructor(nameModel) {
        this.model = nameModel;
    }

    async findAll() {
        return dataSource[this.model].findAll();
    }

    /* este metodo e responsavel por pegar registro por uma determinado
       scopo
    */
    async findDataScope(nameEscopo) {
        return dataSource[this.model].scope(nameEscopo).findAll();
    }

    async findById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async create(data) {
        return dataSource[this.model].create(data);
    }

    async update(id, data) {
        return dataSource[this.model].update(data, {
            where: { id: id }
        });
    }

    async deleteById(id) {
        return dataSource[this.model].destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = Services;
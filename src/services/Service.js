const dataSource = require('../database/models');

class Services {

    constructor(nameModel) {
        this.model = nameModel;
    }

    async findAll(where = {}) {
        return dataSource[this.model].findAll(
            {
                where: { ...where }
            });
    }

    /* este metodo e responsavel por pegar registro por uma determinado
       scopo
    */
    async findDataScope(nameEscopo) {
        return dataSource[this.model].scope(nameEscopo).findAll();
    }

    /* Diferente do findOne esse metodo aceita um ID como parametro */
    async findById(id) {
        return dataSource[this.model].findByPk(id);
    }

    /* Diferente do findById esse metodo aceita uma clausula WHERE como parametro */
    async findOne(where) {
        return dataSource[this.model].findOne({
            where: {
                ...where
            }
        });
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
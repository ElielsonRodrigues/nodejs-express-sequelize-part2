const dataSource = require('../database/models');

class Services {

    constructor(nameModel) {
        this.model = nameModel;
    }

    async findAll() {
        return dataSource[this.model].findAll();
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
        /*
        const updatedParams = dataSource[this.model].update(data, {
            where: { id: id }
        });
        if (updatedParams[0] === 0) {
            return false;
        }
        return true;
        */
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
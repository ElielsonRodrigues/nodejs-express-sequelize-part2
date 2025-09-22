class Controller {

    constructor(entityService) {
        this.entityService = entityService;
    }

    async findAll(req, res) {
        try {
            const allData = await this.entityService.findAll();
            return res.status(200).json(allData);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }


    async findById(req, res) {
        try {
            const data = await this.entityService.findById(req.params.id);
            return res.status(200).json(data);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }

    async findOne(req, res) {

        const { ...params } = req.params;

        console.log(params);
        /*
        try {
            const data = await this.entityService.findOne(p);
            return res.status(200).json(data);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
        */
    }

    async create(req, res) {
        try {
            let getData = req.body;
            const dataCreate = await this.entityService.create(getData);
            return res.status(201).json(dataCreate.dataValues);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }


    async update(req, res) {
        try {
            const dataUpdate = await this.entityService.update(req.params.id, req.body);
            let isUpdate = dataUpdate[0] ? true : false;

            if (isUpdate) {
                return res.status(200).send({ message: `Atualizado com sucesso!` });
            } else {
                return res.status(200).send({ message: `Não localizamos nenhum registro com Id: ${req.params.id} ` });
            }
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }

    async deleteById(req, res) {
        try {
            let getId = req.params.id
            const isDelete = await this.entityService.deleteById(getId);
            if (isDelete) {
                return res.status(204).send();
            } else {
                return res.status(200).send({ message: `Não localizamos nenhum registro com Id: ${getId} ` });
            }
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }
}

module.exports = Controller;
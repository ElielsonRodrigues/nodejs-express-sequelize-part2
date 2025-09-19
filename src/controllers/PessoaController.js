const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
    constructor() {
        super(pessoaService);
    }

    async findMatriculaByEstudanteId(req, res) {
        const { estudanteId } = req.params;
        try {
            const listResult = await pessoaService.
                findMatriculaByEstudanteId(Number(estudanteId));
            return res.status(200).json(listResult);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }
}

module.exports = PessoaController;

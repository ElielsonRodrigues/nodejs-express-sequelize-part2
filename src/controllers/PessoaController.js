const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
    constructor() {
        super(pessoaService);
    }

    // retorna todos os registro ativos por estudante, utilizando o mixins 'matriculasAtivas' do service de pessoa
    async findMatriculasAtivasByEstudanteId(req, res) {
        const { estudante_id } = req.params;
        try {
            const listResult = await pessoaService.
                findMatriculasAtivasByEstudanteId(Number(estudante_id));
            return res.status(200).json(listResult);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }

    // retorna todos os registro por estudante, utilizando o mixins 'todasMatriculas' do service de pessoa
    async findMatriculasByEstudanteId(req, res) {
        const { estudante_id } = req.params;
        try {
            const listResult = await pessoaService.
                findMatriculasByEstudanteId(Number(estudante_id));
            return res.status(200).json(listResult);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }


    /* metodo para pegar registro por um scopo da model de Pessoa */
    async findDataScope(req, res) {
        try {
            const listResult = await pessoaService.
                findDataScope();
            return res.status(200).json(listResult);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }

    /* metodo para pegar registro por um scopo da model de Pessoa */
    async cancelRecordByEstudanteId(req, res) {
        const { estudante_id } = req.params;
        try {
            await pessoaService.cancelRecordMatriculaByEstudanteId(Number(estudante_id));
            return res.status(200).json({ message: `O estudante ${estudante_id} e suas matriculas foram todas canceladas.` });
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }
}

module.exports = PessoaController;

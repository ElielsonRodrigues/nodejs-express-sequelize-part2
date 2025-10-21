const Controller = require('./Controller.js');
const MatriculaService = require('../services/MatriculaService.js');

const matriculaService = new MatriculaService();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaService);
    }


    async findMatriculasByEstudanteId(req, res) {
        const { estudante_id } = req.params;

        try {
            const dataListMatriculasToEstudanteId =
                await matriculaService.countRecords({
                    estudante_id: Number(estudante_id),
                    status: 'matriculado'

                });
            return res.status(200).json(dataListMatriculasToEstudanteId);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }

    }
}

module.exports = MatriculaController;

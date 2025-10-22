const Sequelize = require('sequelize');

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
                    where: {
                        estudante_id: Number(estudante_id),
                        status: 'matriculado'
                    },
                    limit: 2,
                    order: [['id', 'DESC']]
                });
            return res.status(200).json(dataListMatriculasToEstudanteId);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }

    async findCursosCapacity(req, res) {
        const lotacaoCurso = 2;

        try {
            const dataCapacityCurso =
                await matriculaService.countRecords({
                    where: {
                        status: 'matriculado'
                    },
                    attributes: ['curso_id'], // utiliza o atributo curso_id como parametro
                    group: ['curso_id'], // agroupa pelo atributo selecionado no caso curso_id
                    having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`) // manipula a query que e montada atraves do comando literal passando lotação maxima como parametro
                });

            //return res.status(200).json(dataCapacityCurso);
            // ou
            return res.status(200).json(dataCapacityCurso.count);
        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }

    }
}

module.exports = MatriculaController;

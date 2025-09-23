const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController.js');
const pessoaController = new PessoaController();

const MatriculaController = require('../controllers/MatriculaController.js');
const matriculaController = new MatriculaController();


const router = Router();

router.get('/pessoas', (req, res) => pessoaController.findAll(req, res));
router.get('/pessoas/all', (req, res) => pessoaController.findDataScope(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.findById(req, res));
router.post('/pessoas', (req, res) => pessoaController.create(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deleteById(req, res));

/*Criando end-point especifico a parte que listas as matriculas por id do Estudante */
router.get('/pessoas/:estudante_id/matriculas/all', (req, res) => pessoaController.findMatriculasByEstudanteId(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.findOne(req, res));
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.findMatriculasAtivasByEstudanteId(req, res));
 
module.exports = router;
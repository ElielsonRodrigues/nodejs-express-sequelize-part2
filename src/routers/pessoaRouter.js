const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController.js');
const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.findAll(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.findById(req, res));
router.post('/pessoas', (req, res) => pessoaController.create(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deleteById(req, res));

/*Criando end-point especifico a parte que listas as matriculas por id do Estudante */
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.findMatriculaByEstudanteId(req, res));

module.exports = router;
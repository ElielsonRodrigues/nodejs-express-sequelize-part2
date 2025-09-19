const { Router } = require('express');

const CursoController = require('../controllers/CursoController.js');
const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.findAll(req, res));
router.get('/cursos/:id', (req, res) => cursoController.findById(req, res));
router.post('/cursos', (req, res) => cursoController.create(req, res));
router.put('/cursos/:id', (req, res) => cursoController.update(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.deleteById(req, res));

module.exports = router;
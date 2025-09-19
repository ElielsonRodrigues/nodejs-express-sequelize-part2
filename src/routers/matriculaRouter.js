const { Router } = require('express');

const MatriculaController = require('../controllers/MatriculaController.js');
const matriculaController = new MatriculaController();

const router = Router();

router.get('/matriculas', (req, res) => matriculaController.findAll(req, res));
router.get('/matriculas/:id', (req, res) => matriculaController.findById(req, res));
router.post('/matriculas', (req, res) => matriculaController.create(req, res));
router.put('/matriculas/:id', (req, res) => matriculaController.update(req, res));
router.delete('/matriculas/:id', (req, res) => matriculaController.deleteById(req, res));

module.exports = router;
const express = require('express');
const pessoas = require('./pessoaRouter.js');
const matriculas = require('./matriculaRouter.js');
const cursos = require('./cursoRouter.js');
const categorias = require('./categoriaRouter.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        matriculas,
        cursos,
        categorias
    );
};
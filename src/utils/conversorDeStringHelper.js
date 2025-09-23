/* Função resposavel por tratar  o objeto da clausula where da consulta findOne */
module.exports = (objParams) => {

    for (let propriedade in objParams) {
        /* função teste() verifica se algumas propiedades tem 'Id' ou 'id' */
        if (/Id|id/.test(propriedade)) {
            /* captura a propiedade e converte o valor dela pra inteiro */
            objParams[propriedade] = Number(objParams[propriedade]);
        }
    }
    return objParams;
};
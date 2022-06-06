"use strict";
let anyEstaDeVolta;
anyEstaDeVolta: 3;
anyEstaDeVolta: 'teste';
anyEstaDeVolta: 5;
let stringteste = 'verificar';
stringteste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringteste2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringteste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}

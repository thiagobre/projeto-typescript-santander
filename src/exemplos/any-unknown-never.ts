let anyEstaDeVolta: any;
anyEstaDeVolta: 3;
anyEstaDeVolta: 'teste';
anyEstaDeVolta: 5;

let stringteste: string = 'verificar'
stringteste = anyEstaDeVolta;

let unknownValor : unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringteste2: string = 'agora vai';

if (typeof unknownValor === 'string'){
    stringteste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw{error: erro, code: codigo}
}
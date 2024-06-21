/* tipos de dados
 Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valorrd vopisfod

 Referencia (mutável) - array, object, function - vslores passados por referência
 */

const a = {
    nome:'Luiz',
    sobrenome: 'Otavio'
};

const b = {...a};
a.nome = 'João'
console.log(b);
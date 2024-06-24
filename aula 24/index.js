/*
entre 0- 11 = Bom dia
entre 12 - 17 = boa tarde
entre 18 - 23 = boa noite
*/

// o 'if' pode ser usado sozinho
//sempre que utilizo a paralavra 'else' tem que vir um 'if' antes
// o 'else if' pode ser criado quantas vezes queiser na checagem
//so pode ter um 'else' na checagem


const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite!')
} else {
    console.log('Ola')
}
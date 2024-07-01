const numeros = [1,2,3,4,5,6,7,8,9];

while (i < numeros.length) {
        let numero = numeros[i];
    
        if(numero === 2 ){
            console.log('Pulei o numero 2')
            i++
            continue;
        }
        console.log(numero)
        if (numero === 7){
            console.log('7 encontrado e saindo...')
            i++
            break;
        }
    
       i++
    }

//continue continua para proxima iteração
//break sai do laço

// for (let i of numeros) {
//     let numero = numeros[i]

//     if(numero === 2 ){
//         console.log('Pulei o numero 2')
//         continue;
//     }
//     console.log(numero)
//     if (numero === 7){
//         console.log('7 encontrado e saindo...')
//         break;
//     }

   
// }
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisão ser números');
    }
    return x+y;
}
try{
console.log(soma(1,6))
console.log(soma("1",6))
} catch(error) {
    // console.log(error);
    console.log('alguma coisa mais amigavel');
}
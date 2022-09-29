
function sonIguales(valor1: unknown, valor2: unknown): boolean{
    
}

console.log(sonIguales('a', 'b'));//false
console.log(sonIguales([1], [1]));//true
console.log(sonIguales([1], [2]));//false
console.log(sonIguales({a: 1}, {a: 1}));//true
console.log(sonIguales({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 5}));//false
console.log(sonIguales({a: 1, b: ['a', 'b'], c: 3}, {a: 1, b: ['a', 'b'], c: 3}));//true
console.log(sonIguales({a: 1, b: ['a', 'b'], c: 3}, {a: 1, b: ['a', 'c'], c: 3}));//false
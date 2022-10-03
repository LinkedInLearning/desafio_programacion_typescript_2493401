
function sonIguales(valor1: unknown, valor2: unknown): boolean{

    if(Array.isArray(valor1) && Array.isArray(valor2)){
        for(let i = 0, j = valor1.length; i < j; i++){
            if(!sonIguales(valor1[i], valor2[i])){
                return false;
            }
        }

        return true;
    }

    if(valor1 && valor2 && typeof valor1 === 'object' && typeof valor2 === 'object'){
        const keys1 = Object.keys(valor1);
        const keys2 = Object.keys(valor2);
        if(keys1.length !== keys2.length){
            return false;
        }
        for(const key of keys1){
            if(!sonIguales(valor1[key as keyof typeof valor1], valor2[key as keyof typeof valor2])){
                return false;
            }
        }

        return true;
    }

    return valor1 === valor2;
}

console.log(sonIguales('a', 'b'));//false
console.log(sonIguales([1], [1]));//true
console.log(sonIguales([1], [2]));//false
console.log(sonIguales({a: 1}, {a: 1}));//true
console.log(sonIguales({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 5}));//false
console.log(sonIguales({a: 1, b: ['a', 'b'], c: 3}, {a: 1, b: ['a', 'b'], c: 3}));//true
console.log(sonIguales({a: 1, b: ['a', 'b'], c: 3}, {a: 1, b: ['a', 'c'], c: 3}));//false
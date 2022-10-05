
//Implementa la función aquí:

function contieneDuplicados<T>(arreglo: T[]): boolean{
    while(arreglo.length !== 0){
        const elemento = arreglo.pop();
        if(elemento && arreglo.length > 0){
            for(const el of arreglo){
                if(el === elemento){
                    return true;
                }
            }
        }
    }

    return false;
}

const resultado1 = contieneDuplicados([1, 2, 3, 4, 6, 5, 6, 7]);
console.log(resultado1);

const resultado2 = contieneDuplicados([{a: 1}, {b: 2}, {a: 1}]);
console.log(resultado2);

const resultado3 = contieneDuplicados(['casa', 'zebra', 'bosque', 'luna']);
console.log(resultado3);
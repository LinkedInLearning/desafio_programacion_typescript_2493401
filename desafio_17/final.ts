
function clousure(valor: number | number[]){

    const cambiarArreglo: () => number[] = () => {
        if(Array.isArray(valor)){
            valor = valor.map(val => val * 2);
            return valor;
        }
        throw new Error('no es arreglo');
    };

    const cambiarValor: () => number = () => {
        if(!Array.isArray(valor)){
            valor *= 2;
            return valor;
        }
        throw new Error('no es número');
    }

    if(Array.isArray(valor)){
        return cambiarArreglo;
    }

    return cambiarValor;
}

const prueba = clousure(10);
console.log(prueba());
console.log(prueba());
console.log(prueba());
console.log(prueba());

const pruebaArreglo = clousure([10, 20, 30, 40]);
console.log(pruebaArreglo());
console.log(pruebaArreglo());
console.log(pruebaArreglo());
console.log(pruebaArreglo());
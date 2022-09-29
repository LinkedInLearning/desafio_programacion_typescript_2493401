
function imprimirValores<T>(lista: Iterable<T>): void{
    for (let i of lista) {
        console.log(i);
    }
}

imprimirValores([1,2,3,4]);

const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};

imprimirValores(iterable);

const mapa = new Map<number, string>([
    [1, 'prueba1'],
    [2, 'prueba2'],
    [3, 'prueba3'],
    [4, 'prueba4'],
]);

imprimirValores(mapa);

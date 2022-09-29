

mapearValores([1,2,3,4], num => num * 2);


interface IterateNumber {
  [Symbol.iterator](): IterableIterator<number>;
}

const iterable: IterateNumber = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};

mapearValores(iterable, num => num * 2);

const mapa = new Map<number, string>([
    [1, 'prueba1'],
    [2, 'prueba2'],
    [3, 'prueba3'],
    [4, 'prueba4'],
]);

mapearValores<[number, string], string>(mapa, (val: [number, string] ) => val[1]);
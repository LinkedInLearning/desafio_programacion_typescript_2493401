
type Union = number | string | boolean;

type UnionArreglo = Union[];

class Impresor{

    private _valores: UnionArreglo;
    private _color: string;
    private _mapeoDatos: (valor: Union) => Union;


    constructor(
        valores: UnionArreglo,
        color: string,
        mapeoDatos: (valor: Union) => Union
    ){
        this._valores = valores;
        this._color = color;
        this._mapeoDatos = mapeoDatos;
    }

    public imprimir(){
        this._valores.map(this._mapeoDatos).forEach( valor => console.log(`%c ${valor}`, `color: ${this._color}`));
    }
}

const numeros = new Impresor([1, 2, 3, 4, 5, 6, 7, 8, 9], '#bada55', (numero => (numero as number) * 2));
numeros.imprimir();

const textos = new Impresor(['Lorem', 'ipsum', 'dolor', 'sit', 'amet'], '#a3073d', (texto => (texto as string).toUpperCase()));
textos.imprimir();

const booleanos = new Impresor([true, true, false, true, false, true], '#943b0c', (booleano => (booleano as boolean)? 1 : 0));
booleanos.imprimir();

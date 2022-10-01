
class Impresor{

    private _valores;
    private _color;
    private _mapeoDatos;


    constructor(){
        
    }

    public imprimir(){
       
    }
}

const numeros = new Impresor([1, 2, 3, 4, 5, 6, 7, 8, 9], '#bada55', (numero => (numero as number) * 2));
numeros.imprimir();

const textos = new Impresor(['Lorem', 'ipsum', 'dolor', 'sit', 'amet'], '#a3073d', (texto => (texto as string).toUpperCase()));
textos.imprimir();

const booleanos = new Impresor([true, true, false, true, false, true], '#943b0c', (booleano => (booleano as boolean)? 1 : 0));
booleanos.imprimir();

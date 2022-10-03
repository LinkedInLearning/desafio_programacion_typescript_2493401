interface ICuartos{
    numeroCuartos: number;
}

class DosCuartos implements ICuartos{
    numeroCuartos = 2;
}

class TresCuartos implements ICuartos{
    numeroCuartos = 3;
}

interface IPisos{
    numeroPisos: number;
}

class UnPiso implements IPisos{
    numeroPisos = 1;
}

class DosPisos implements IPisos{
    numeroPisos = 2;
}

interface ICalentador{
    tipo: 'electrico' | 'gas';
}

class CalentadorElectrico implements ICalentador{
    tipo = 'electrico' as const;
}

class CalentadorGas implements ICalentador{
    tipo = 'gas' as const;
}

class Factory{
    static obtenerPisos(numero: 1 | 2): IPisos{
        if(numero === 1){
            return new UnPiso();
        }else{
            return new DosPisos();
        }
    }

    static obtenerCuartos(numero: 2 | 3): ICuartos{
        if(numero === 2){
            return new DosCuartos();
        }else{
            return new TresCuartos();
        }
    }

    static obtenerCalentador(tipo: 'electrico' | 'gas'): ICalentador{
        if(tipo === 'electrico'){
            return new CalentadorElectrico();
        }else{
            return new CalentadorGas();
        }
    }
}

class Casa{
    pisos: IPisos = Factory.obtenerPisos(1);
    calentador: ICalentador = Factory.obtenerCalentador('gas');
    cuartos: ICuartos = Factory.obtenerCuartos(3);
}

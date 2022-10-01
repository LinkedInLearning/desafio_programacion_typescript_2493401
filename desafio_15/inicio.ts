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



class Casa{
    pisos: IPisos = ?;
    calentador: ICalentador = ?;
    cuartos: ICuartos = ?;
}

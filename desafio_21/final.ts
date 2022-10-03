type Animal = string;
type CompaniaCategoria = 'web' | 'software' | 'news' | 'social';
type Compania = {
    nombre: string;
    categoria: CompaniaCategoria;
    numEmpleados: number;
    annoFundacion: number;
}

function esNumero(valor: unknown): asserts valor is number{
    if(typeof valor !== 'number'){
        throw new Error(`${valor} no es number`);
    }
}

function esString(valor: unknown): asserts valor is string{
    if(typeof valor !== 'string'){
        throw new Error(`${valor} no es string`);
    }
}

function esCategoria(valor: unknown): asserts valor is CompaniaCategoria{
    if(valor === 'web' || valor === 'software' || valor === 'news' || valor === 'social'){
        throw new Error(`${valor} no es una categoria válida`);
    }
}

function ejecutarPeticion<T>(peticion: RequestInfo, funcParseo: (valores: unknown) => T): Promise<T>{
    return fetch(peticion)
    .then((respuesta: Response) => respuesta.json())
    .then((datos: unknown) => funcParseo(datos))
    .catch(error => {
        throw new Error(error);
    });
}

ejecutarPeticion<Animal[]>('./animales.json', (valores: unknown): Animal[]=>{
    if(!Array.isArray(valores)){
        throw new Error ('no es un arreglo');
    }
    return valores.map(valor =>{
        esString(valor);
        return valor as Animal;
    });
})
.then(animales => console.log(animales));

ejecutarPeticion<Compania[]>('./companias.json', (valores: unknown): Compania[]=>{
    if(!Array.isArray(valores)){
        throw new Error ('no es un arreglo');
    }
    return valores.map(valor =>{
        esString(valor['nombre']);
        esCategoria(valor['compania']);
        esNumero(valor['numEmpleados']);
        esNumero(valor['annoFundacion']);
        return valor as Compania;
    });
})
.then(companias => console.log(companias));
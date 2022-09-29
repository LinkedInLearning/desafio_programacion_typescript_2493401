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


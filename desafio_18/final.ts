interface Persona {
    id: string;
    nombre: string;
}

interface Empleado extends Persona {
    empresa: string;
    fechaNacimiento: Date;
    nivel: number;
}

const personas: Empleado[] = [
  {
    id: '632656494a83c7a1f9ad7c20',
    nombre: 'Ewing Barrera',
    empresa: 'Quiltigen',
    fechaNacimiento: new Date('1989-06-25'),
    nivel: 10
  },
  {
    id: '63265649fe86a757eedbffcf',
    nombre: 'Karla Lara',
    empresa: 'Signity',
    fechaNacimiento: new Date('1994-10-09'),
    nivel: 5
  },
  {
    id: '6326564931ca73a087028e77',
    nombre: 'Fran Lee',
    empresa: 'Artiq',
    fechaNacimiento: new Date('1990-05-05'),
    nivel: 2
  },
  {
    id: '632656494844bdc434c7aa4d',
    nombre: 'Barbara Langley',
    empresa: 'Xeronk',
    fechaNacimiento: new Date('1993-03-23'),
    nivel: 8
  },
  {
    id: '63265649c07099fdca1134d5',
    nombre: 'Avis Rowland',
    empresa: 'Silodyne',
    fechaNacimiento: new Date('1988-01-19'),
    nivel: 6
  },
  {
    id: '6326564939a83096c758f284',
    nombre: 'Rasmussen Wiley',
    empresa: 'Rodeocean',
    fechaNacimiento: new Date('1988-07-21'),
    nivel: 9
  },
  {
    id: '632656494ff4535149b7bf41',
    nombre: 'Davis Shepherd',
    empresa: 'Xplor',
    fechaNacimiento: new Date('1994-01-23'),
    nivel: 10
  },
  {
    id: '63265649f8c5405aa5b67c97',
    nombre: 'Peters Maldonado',
    empresa: 'Xeronk',
    fechaNacimiento: new Date('1991-05-27'),
    nivel: 1
  },
  {
    id: '63265649aafb97e60828723a',
    nombre: 'Joanna Mclean',
    empresa: 'Xeronk',
    fechaNacimiento: new Date('1989-05-25'),
    nivel: 3
  }
];

class Datos<T extends Persona>{
    private _datos: T[];
    constructor(datos: T[]){
        this._datos = datos;
    }

    filtrar<F>(filtro: FiltroGenerico<F, T>): T[]{
      return this._datos.filter((valor: T) => filtro.func(valor[filtro.key as keyof T] as unknown as F));
    }
}

interface FiltroGenerico<F, T>{
    key: keyof T;
    func: (valor: F) => boolean;
}

const filtroEmpresa: FiltroGenerico<string, Empleado> = {
    key: 'empresa',
    func: (valor: string) => valor === 'Xeronk',
}

const filtroNivel: FiltroGenerico<number, Empleado> = {
    key: 'nivel',
    func: (valor: number) => valor >= 5,
}

const datos = new Datos<Empleado>(personas);
console.log(datos.filtrar(filtroEmpresa));
console.log(datos.filtrar(filtroNivel));
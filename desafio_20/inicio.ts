enum Rol {
    ADMIN,
    MIEMBRO,
    INVITADO,
}

type Coordenadas = {
    lat: number;
    long: number;
}

interface Perfil{
    nombre: string;
    compania: string;
    fechaNacimiento: Date;
    direccion: string;
    ubicacion: Coordenadas;
    acerca: string;
}

interface Usuario {
    id: string;
    email: string;
    usuario: string;
    perfil: Perfil;
    roles: Rol[];
}

function assertString(valor: unknown): asserts valor is string{
    if(typeof valor !== 'string'){
        throw new Error(`${valor} no es string`);
    }
}

function assertNumber(valor: unknown): asserts valor is number{
    if(typeof valor !== 'number'){
        throw new Error(`${valor} no es number`);
    }
}

function assertDate(valor: unknown): asserts valor is Date{
    const timestamp = Date.parse(valor as string);
    if(isNaN(timestamp)){
        throw new Error(`${valor} no es una fecha válida`);
    }
}

function obtenerRol(valor: string): Rol{
    switch(valor){
        case 'admin':
            return Rol.ADMIN;
        case 'miembro':
            return Rol.MIEMBRO;
        case 'invitado':
            return Rol.INVITADO;
        default:
            throw new Error(`${valor} no es un rol reconocido`);
    }
}

const urlJson = './usuarios.json';

fetch(urlJson)
.then(respuesta => respuesta.json())
.then((datos: {}[]) => {
    return datos.map((dato: {})=>{

        const usuario: Usuario = {
            id: dato['id' as keyof typeof dato],
            email: dato['email' as keyof typeof dato],
            usuario: dato['usuario' as keyof typeof dato],
            perfil:{
                nombre: dato['perfil' as keyof typeof dato]['nombre'],
                compania: dato['perfil' as keyof typeof dato]['compania'],
                fechaNacimiento: new Date(dato['perfil' as keyof typeof dato]['f_nacimiento']),
                direccion: dato['perfil' as keyof typeof dato]['direccion'],
                ubicacion: {
                    lat: dato['perfil' as keyof typeof dato]['ubicacion']['lat'],
                    long: dato['perfil' as keyof typeof dato]['ubicacion']['long'],
                },
                acerca: dato['perfil' as keyof typeof dato]['acerca']
            },
            roles: Array.from(dato['roles' as keyof typeof dato]).map(rol => obtenerRol(rol as string)),
        };
        return usuario;
    });
}).then((usuarios: Usuario[]) => console.log(usuarios));
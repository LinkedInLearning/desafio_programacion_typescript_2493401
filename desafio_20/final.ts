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

function assert(condicion: unknown, mensaje: string): asserts condicion{
    if(!condicion){
        throw new Error(mensaje);
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
        assert(typeof dato['id' as keyof typeof dato] === 'string', 'id no es string');
        assert(typeof dato['email' as keyof typeof dato] === 'string', 'email no es string');
        assert(typeof dato['usuario' as keyof typeof dato] === 'string', 'usuario no es string');
        assert(typeof dato['perfil' as keyof typeof dato]['nombre'] === 'string', 'nombre no es string');
        assert(typeof dato['perfil' as keyof typeof dato]['compania'] === 'string', 'compania no es string');
        const timestamp = Date.parse(dato['perfil' as keyof typeof dato]['f_nacimiento']);
        assert(!isNaN(timestamp), 'f_nacimiento no es una fecha válida');
        assert(typeof dato['perfil' as keyof typeof dato]['direccion'] === 'string', 'direccion no es string');

        assert(typeof dato['perfil' as keyof typeof dato]['ubicacion']['lat'] === 'number', 'lat no es número');
        assert(typeof dato['perfil' as keyof typeof dato]['ubicacion']['long'] === 'number', 'long no es número');

        assert(typeof dato['perfil' as keyof typeof dato]['acerca'] === 'string', 'acerca no es string');

        assert(Array.isArray(dato['roles' as keyof typeof dato]), 'roles no es un arreglo');

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
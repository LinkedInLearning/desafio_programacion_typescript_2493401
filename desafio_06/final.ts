interface Usuario{
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    codigoPostal: string;
}

type LlavesUsuario = keyof Usuario;

const llavesUsuario: LlavesUsuario[] = ['nombre', 'apellido', 'correo', 'telefono', 'codigoPostal'];

function crearUsuario(datos: {}): Usuario {

    const llaves = Object.keys(datos);
    for(const llave of llaves){
        if(!llavesUsuario.includes(llave as LlavesUsuario)){
            throw new Error (`${llave} no es parte de la definición de Usuario`);
        }
    }

    if(llaves.length !== llavesUsuario.length){
        throw new Error (`El número de propiedades no coincide`);
    }

    return datos as Usuario;
}

crearUsuario({
    nombre: 'Natalia',
    apellido: 'Corea',
    correo: 'nc@gmail.com',
    telefono: '11122233',
    direccion: 'Dublín',
    codigoPostal: 'D03TR89',
});

crearUsuario({
    nombre: 'Natalia',
    apellido: 'Corea',
    correo: 'nc@gmail.com',
    telefono: '11122233',
    codigoPostal: 'D03TR89'
});

enum Rol{
    ADMIN = 'admin',
    MIEMBRO = 'miembro',
    INVITADO = 'invitado',
}

interface Usuario {
    email: string;
    usuario: string;
    rol: Rol;
}

function esRolValido(valor: string): valor is Rol{
    return Object.values<string>(Rol).includes(valor);
}

function obtenerRol(rol: string): Rol{
    if(!esRolValido(rol)){
        throw new Error('El rol pasado como parámetro no es válido!');
    }

    return rol as Rol;
}

function crearUsuario(email: string, usuario: string, rol: string): Usuario{
    return {
        email,
        usuario,
        rol: obtenerRol(rol)
    }
}
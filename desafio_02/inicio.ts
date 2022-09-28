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


function obtenerRol(rol: string): Rol{
    
}

function crearUsuario(email: string, usuario: string, rol: string): Usuario{
    return {
        email,
        usuario,
        rol: obtenerRol(rol)
    }
}
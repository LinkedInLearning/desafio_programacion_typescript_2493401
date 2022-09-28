
interface Perfil{
    nombre: string;
    compania: string;
    fechaNacimiento: Date;
    direccion: string;
    acerca: string;
}

interface Acceso {
    id: string;
    email: string;
    usuario: string;
    contrasena: string;
}

type Usuario = Perfil & Acceso;

function crearUsuario(perfil: Perfil, acceso: Acceso) {
    
}
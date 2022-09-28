interface Usuario{
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    codigoPostal: string;
}


function crearUsuario(datos: {}): Usuario {

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

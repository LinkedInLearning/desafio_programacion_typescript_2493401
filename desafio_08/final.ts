interface Usuario{
    nombre: string;
    apellido: string;
    correo: string;
    compania: string;
}

function crearUsuario(valores: Partial<Usuario>): Usuario{
    return{
        nombre: 'Nombre predeterminado',
        apellido: 'apellido predeterminado',
        correo: 'correo predeterminado',
        compania: 'compania predeterminada',
        ...valores,
    }
}

const prueba1 = crearUsuario({
    nombre: 'Natalia',
});

console.log(prueba1);

const prueba2 = crearUsuario({
    nombre: 'Natalia',
    compania: 'LinkedIn Learning'
});

console.log(prueba2);
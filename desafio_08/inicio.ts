interface Usuario{
    nombre: string;
    apellido: string;
    correo: string;
    compania: string;
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
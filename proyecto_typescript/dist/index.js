"use strict";
function crearUsuario(valores) {
    return Object.assign({ nombre: 'Nombre predeterminado', apellido: 'Apellido predeterminado', correo: 'Correo predeterminado', compania: 'Compania predeterminado' }, valores);
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
//# sourceMappingURL=index.js.map
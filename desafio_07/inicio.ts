
const invalido1 = '\n';
const invalido2 = '\t';
const invalido3 = '\\';

function limpiarString(texto: string): string{
    return texto
    .split('')
    .map(caracter => caracter === invalido1 || caracter === invalido2 || caracter === invalido3? '' : caracter)
    .join('');
}

function limpiarTexto(datos: string | string[]): string | string[]{
    
}

const textoPrueba = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Nullam magna nulla,         pretium placerat odio eget, 
volutpat tincidunt lorem. Proin sagittis `;

console.log(textoPrueba);

const prueba = limpiarTexto(textoPrueba);

console.log(prueba);
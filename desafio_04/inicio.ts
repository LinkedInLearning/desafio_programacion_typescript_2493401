type TipoArchivo = 'XML' | 'TXT' | 'JSON';
type Acciones = 'Crear' | 'Actualizar' | 'Borrar';

function procesarDatos(evento: unknown, datos: string): void{
    console.log(evento);
    console.log(datos);
}

procesarDatos('CrearXML',
`<modulo numero="10">
  <nombre>Lorem ipsum dolor</nombre>
  <descripcion>Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
  Cras malesuada libero vel dui dapibus,
  a molestie augue semper.
  </descripcion>
</modulo>`);

procesarDatos('ActualizarJSON', 
`"perfil": {
        "nombre": "Caitlin Pugh",
        "compania": "Zillar",
        "f_nacimiento": "1989-07-20",
        "direccion": "51 Eckford Street, Salvo, Delaware",
        "ubicacion": {
          "lat": 50.508825,
          "long": -121.813101
        },
        "acerca": "Reprehenderit incididunt laborum irure enim aliqua pariatur esse excepteur culpa. Eu non Lorem fugiat eiusmod fugiat."
}`);
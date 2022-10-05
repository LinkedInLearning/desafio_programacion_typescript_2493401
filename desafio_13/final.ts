const eventosJavaScript = [
    {
        nombre: 'Evento click',
        evento: 'onclick',
    },
   {
        nombre: 'Evento de cambio de un elemento',
        evento: 'onchange',
    },
    {
        nombre: 'Evento cuando el puntero se mueve dentro del área de un elemento',
        evento: 'onmouseover',
    }, 
    {
        nombre: 'Evento cuando el puntero sale del del área de un elemento',
        evento: 'onmouseout',
    },
    {
        nombre: 'Evento cuando el usuario presiona una tecla',
        evento: 'onkeydown',
    },
    {
        nombre: 'Evento cuando la página termina la carga',
        evento: 'onload',
    }, 
] as const;


type Evento = typeof eventosJavaScript[number]['evento'];

const eventos: Evento[] = ['onchange', 'onclick'];

type ListaProductos = 'fresas' | 'arroz' | 'frijoles' | 'tomates' | 'pollo' | 'bistec' | 'mandarinas';

type Propiedades = {
    cantidad: number,
    precio: number,
    categoria: string,
    tipo: string,
};

type Productos = Record<ListaProductos, Propiedades>;

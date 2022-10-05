interface Productos {
    arroz: {enInventario: true},
    azucar: {enInventario: false},
    carne: {enInventario: true},
    leche: {enInventario: false},
}

type ExtractoEnInventario<Type> = {
  [Property in keyof Type]: Type[Property] extends { enInventario: true } ? true : false;
};

type ProductosEnInventario = ExtractoEnInventario<Productos>;

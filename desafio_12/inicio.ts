interface Productos {
    arroz: {enInventario: true},
    azucar: {enInventario: false},
    carne: {enInventario: true},
    leche: {enInventario: false},
}


type ProductosEnInventario = ?;
type MotorDiesel = 'diesel';

type MotorGasolina = 'gasolina';

type Auto = 
| {
    motor: MotorGasolina,
    tipo: 'sedan',
    puertas: 4, 
}
| {
    motor: MotorGasolina,
    tipo: 'hatchback',
    puertas: 5, 
}
| {
    motor: MotorGasolina,
    tipo: 'coupé',
    puertas: 2, 
}
| {
    motor: MotorDiesel,
    tipo: 'suv',
    puertas: 5, 
}
| {
    motor: MotorDiesel,
    tipo: 'wagon',
    puertas: 5, 
};


crearAuto<'sedan'>('sedan', {
    puertas: 4,
    motor: 'gasolina',
});

crearAuto<'wagon'>('wagon', {
    puertas: 5,
    motor: 'diesel'
});
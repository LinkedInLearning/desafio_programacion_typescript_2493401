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

type TipoAuto = Auto['tipo'];


type ExcluirTipo<K> = K extends 'tipo' ? never : K;

type ExcluirLlaveTipo<Auto> = { [K in ExcluirTipo<keyof Auto>]: Auto[K] }

type ExtraerParametrosAuto<A, T> = A extends { tipo: T } ? ExcluirLlaveTipo<A> : never;

function crearAuto<T extends TipoAuto>(tipo: TipoAuto, parametros: ExtraerParametrosAuto<Auto, T>): void{}

crearAuto<'sedan'>('sedan', {
    puertas: 4,
    motor: 'gasolina'
});

crearAuto<'wagon'>('wagon', {
    puertas: 4,
    motor: 'gasolina'
});
function sobrecargaTuplas<T1>(valores: [T1]): number
function sobrecargaTuplas<T1, T2>(valores: [T1, T2]): number
function sobrecargaTuplas<T1, T2, T3>(valores: [T1, T2, T3]): number
function sobrecargaTuplas(valores: [unknown] | [unknown, unknown] | [unknown, unknown, unknown]) {
  return valores.length;
}

sobrecargaTuplas([10]);
sobrecargaTuplas([10, 'prueba']);
sobrecargaTuplas([10, false, 'prueba']);

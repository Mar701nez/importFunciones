export function saludar(nombre) {
  return "Hola " + nombre + ", bienvenido a aplicacion de Martinez";
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema Martinez funcionando correctamente",
  };
}

export function sumar(a, b) {
  const resultado = a + b;
  return "la suma de los numeros " + a + " + " + b + " es igual a " + resultado;
}

export function healtCheack () {
  return {
    status:'ok',
    timestape: new Date().toISOString(),
    servicio: 'Streamflow API',
    version: '1.1.0'
  };
}

export function factorial(n) {
    if (n < 0) return "Error: No existe factorial de números negativos";
    if (n === 0 || n === 1) return 1;
    
    let resultado = 1;
    for (let i == 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

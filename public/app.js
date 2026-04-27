const { version } = require("react");

const VERSION = '1,2,0';

function saludar (nombre){
    return 'hola ${nombre}, bienvenido a martinez';
}

function healtchek(){
    return{
        status: 'ok',
        version: VERSION,
        timestamp: new Date().toISOString(),
        mesaje: 'sistemas mar701nez funcionando correctamente'
    };
}

function verificarSistema(){
const resultado = healtchek();
const statusDiv = document.getElementById('status');
statusDiv.textContent = '${resultado.message} | ${resultado.timestamp}';
statusDiv.style.color = '#009b4c'
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v${VERSION}`;
    verificarSistema();
})
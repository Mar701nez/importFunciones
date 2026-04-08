import {saludar, despedir, estadoSistema} from "../src/app"

function ejecutarPruebas(){
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Martinez")
    if (r1.includes.toLowerCase("Martinez")){
        console.log ("Test 1 pasado: funcion saludar en Martinez es correcta")
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado == "activo"){
        console.log ("Test 2: pasado: estadoSistema() funciona en Martinez")
        pasadas++
    } else {
        console.log("Test 2: fallido", estado, "en Martinez");
        fallidas++
    }
    console.log("\nResultados: " + pasadas + "pasadas, ", + fallidas + "fallidas");
    if (fallidas>0) ProcessingInstruction.exit(1);
}
    ejecutarPruebas()
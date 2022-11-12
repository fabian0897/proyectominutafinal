import { regitromindat } from "../js/firebase.js";

const formulario = document.getElementById("formminuta")


async function registro(hora, nombre, cedula, ubicacion, celular, linterna, arma, novedad){

    try{
        regitromindat(
            hora,
            nombre,
            cedula,
            ubicacion,
            celular,
            linterna,
            arma,
            novedad
            )

        alert("la minuta del turno en la hora "+hora+" ha sido registrada correctamente")
        formulario.reset()   
        
        /**/    
    } catch(error){
        console.log(error.code);
    }

    
}

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    
    const hora= document.getElementById("horaid").value
    const nombre= document.getElementById("nombreid").value
    const cedula= document.getElementById("cedulaid").value
    const ubicacion= document.getElementById("ubicacionid").value
    const celular= document.getElementById("celularid").value
    const linterna= document.getElementById("liternaid").value
    const arma= document.getElementById("armaid").value
    const novedad= document.getElementById("novedadesid").value

    console.log(hora, nombre, cedula, ubicacion, celular, linterna, arma, novedad)


    registro(hora, nombre, cedula, ubicacion, celular, linterna, arma, novedad)
    


})
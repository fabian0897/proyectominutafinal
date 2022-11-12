import { regitrominuta, registeruser } from "../js/firebase.js";

const formulario = document.getElementById("formregistro")


async function registro(user,pass,nombre,cedula,cargo,rh,genero){

    try{
        const autentication = await registeruser(user,pass)
        regitrominuta(
            nombre,
            cedula,
            cargo,
            rh,
            genero
            )

        alert("el usuario "+user+" ha sido registrado con exito")
        console.log(nombre,cedula,cargo,rh,genero)
        formulario.reset()   
        
        /**/    
    } catch(error){
        console.log(error.code);
    }

    
}

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    
    const user= document.getElementById("emailid").value
    const pass= document.getElementById("passid").value
    const ConfirmPass= document.getElementById("conpassid").value
    const nombre= document.getElementById("nombreid").value
    const cedula= document.getElementById("cedulaid").value
    const rh= document.getElementById("rhid").value
    const genero= document.getElementById("generoid").value
    const cargo= document.getElementById("cargoid").value

    console.log(user,pass,ConfirmPass,nombre,cedula,rh,genero,cargo)

    if (user === '' || pass === ''|| ConfirmPass=== ''){
        
        alert("No puede haber campos vacios")
        
    }if (pass != ConfirmPass){

        alert("Las contraseñas son diferente, ingrese la misma cotraseña en ambos campos")

    }if (pass.length <5){

        alert("Las contraseñas deben ser de mas de 6 digitos")

    }if(pass === ConfirmPass){
        
        registro(user,pass,nombre,cedula,cargo,rh,genero)

    }
    


})
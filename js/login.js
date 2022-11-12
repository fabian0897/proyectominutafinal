import { Loginvalidation,db } from "../js/firebase.js";

const inicioses = document.getElementById("formrelogin")

async function login(user,pass){

    try{
        const sesion = Loginvalidation(user,pass)
        const validation= await sesion
        
        if(validation != null){
            alert("Bienvenido "+user)
            window.location.href="../plantillas/alimentar.html"
        }
    }catch(error){
        console.log("Sesion"+user+"not validation")
        alert("Error de usuario verifique usuario y/o contraseña")
    }
    
}

inicioses.addEventListener('submit', (evento)=>{

    evento.preventDefault();
    const user= document.getElementById("userid").value
    const pass= document.getElementById("passid").value

    login(user,pass)

    
})
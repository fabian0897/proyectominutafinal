import { db } from "../js/firebase.js";
import {getDoc,doc,} 
from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

const formregistro = document.getElementById('mostrar')
const contenedor= document.getElementById("mostrartodo")


formregistro.addEventListener('submit',async (e)=>{
    e.preventDefault()

    const horas= formregistro ['horas'].value

    const docRef = doc(db, "CUENTAS", horas);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const card= document.getElementById("card")
      contenedor.innerHTML=`
      <div class="card text-center">
      <div class="card-header">
      </div>
      <div class="card-body">
        <h5 class="card-title"> ${docSnap.data().cargo}</h5>
        <p class="card-text"> Cedula: ${docSnap.data().cedula}</p>
        <p class="card-text"> Departamento: ${docSnap.data().genero}</p>
        <p class="card-text"> Celular: ${docSnap.data().nombre}</p>
        <p class="card-text"> Linterna: ${docSnap.data().rh}</p>        
      </div>
      <div class="card-footer text-muted">
      </div>
      </div>
      
      `
      formregistro.reset()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  

}) 
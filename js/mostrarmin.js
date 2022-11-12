import { db } from "../js/firebase.js";
import {getDoc,doc,getDocs,collection} 
from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

const querySnapshot = await getDocs(collection(db,"Minutas"));

const tabla = document.getElementById("cuerpotabla")

querySnapshot.forEach((doc) => {
    const row = tabla.insertRow();
    const registros = doc.data();
    row.innerHTML=`
    <tr>
      <th scope="col">${registros.hora}</th>
      <th scope="col">${registros.nombre}</th>
      <th scope="col">${registros.cedula}</th>
      <th scope="col">${registros.ubicacion}</th>
      <th scope="col">${registros.celular}</th>
      <th scope="col">${registros.linterna}</th>
      <th scope="col">${registros.arma}</th>
      <th scope="col">${registros.novedad}</th>
      
    </tr>
    `
})
import React from 'react'
import axios from 'axios';


export const comprobarLogin = async (lazyParams) => {
  const nombre = lazyParams.nombre;
  const password = lazyParams.convocatoriaDenominacion


  return await axios.get(`http://localhost/paso_a_paso/login.php/${nombre}=${password}`)
}


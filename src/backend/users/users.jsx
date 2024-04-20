import React from 'react'
import axios from 'axios';


export const comprobarLogin = async (lazyParams) => {
  const nombre = lazyParams.nombre;
  const password = lazyParams.password


  return await axios.post(`http://localhost/paso_a_paso/login.php?nombre=${nombre}&password=${password}`)
}


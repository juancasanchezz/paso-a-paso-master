import React from 'react'
import axios from 'axios';


export const comprobarLogin = async (lazyParams) => {
  const nombre = lazyParams.nombre;
  const password = lazyParams.password


  return await axios.post(`http://localhost/paso_a_paso/login.php?nombre=${nombre}&password=${password}`)
}

export const comprobarRegister = async (lazyParams) => {
  const nombre = lazyParams.newUsername;
  const password = lazyParams.newPassword;
  const mail = lazyParams.newEmail;
  const apellidos = lazyParams.newSurname;

  return await axios.post(`http://localhost/paso_a_paso/register.php?nombre=${nombre}&apellidos=${apellidos}&mail=${mail}&password=${password}`)

}
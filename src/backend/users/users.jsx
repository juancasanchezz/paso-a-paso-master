import React from 'react'
import axios from 'axios';


export const comprobarLogin = async (lazyParams) => {
  const nombre = lazyParams.nombre;
  const password = lazyParams.password

  return await axios.get(`http://localhost/paso_a_paso/login.php?nombre=${nombre}&password=${password}`)
}

export const comprobarRegister = async (userData) => {

  return await axios.post(`http://localhost/paso_a_paso/register.php`, userData)

}

export const getDatosUser = async () => {

  return await axios.get('http://paso_a_paso/perfil.php');

}

export const postRutas = async (userData) => {

  return await axios.post(`http://localhost/paso_a_paso/addRuta.php`, userData)

}
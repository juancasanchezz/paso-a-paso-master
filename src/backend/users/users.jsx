import React from 'react'
import axios from 'axios';


export const comprobarLogin = async (lazyParams) => {
  const nombre = lazyParams.nombre;
  const password = lazyParams.password

  return await axios.post(`http://localhost/paso_a_paso/login.php?nombre=${nombre}&password=${password}`)
}

export const comprobarRegister = async (userData) => {

  return await axios.post(`http://localhost/paso_a_paso/register.php`, userData)

}

export const getDatosUser = async (idUser) => {

  return await axios.get(`http://localhost/paso_a_paso/perfil.php?IdUsuario=${idUser}`);

}

export const postRutas = async (ruta) => {

  return await axios.post(`http://localhost/paso_a_paso/addRuta.php`, ruta)

}

export const getRutas = async () => {

  return await axios.get(`http://localhost/paso_a_paso/getRutas.php`)
}

export const updateUser = async (usuario) => {

  return await axios.post(`http://localhost/paso_a_paso/updateUser.php`, usuario)
}

export const searchRutas = async (inputValue) => {
  return await axios.get(`http://localhost/paso_a_paso/busquedaRutas.php?ubicacion=${inputValue}`);
}
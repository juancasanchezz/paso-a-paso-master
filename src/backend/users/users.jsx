import React from 'react'
import axios from 'axios';

const apiUrl = '/paso-a-paso.atwebpages.com/paso_a_paso';

export const comprobarLogin = async (lazyParams) => {
  const nombre = lazyParams.nombre;
  const password = lazyParams.password
  return await axios.post(`${apiUrl}/login.php?nombre=${nombre}&password=${password}`)
}

export const comprobarRegister = async (userData) => {
  return await axios.post(`${apiUrl}/register.php`, userData)
}

export const getDatosUser = async (idUser) => {
  return await axios.get(`${apiUrl}/perfil.php?IdUsuario=${idUser}`);
}
export const deleteUser = async (idUser) => {
  return await axios.get(`${apiUrl}/borrarUser.php?IdUsuario=${idUser}`);
}

export const postRutas = async (ruta) => {
  return await axios.post(`${apiUrl}/addRutas.php`, ruta)
}

export const updateUser = async (usuario) => {
  return await axios.post(`${apiUrl}/updateUser.php`, usuario)
}

export const searchRutas = async (inputValue) => {
  return await axios.get(`${apiUrl}/busquedaRutas.php?ubicacion=${inputValue}`);
}
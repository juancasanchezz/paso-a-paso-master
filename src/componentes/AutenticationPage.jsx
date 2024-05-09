import React, { useState } from 'react';
import { comprobarLogin, comprobarRegister } from '../backend/users/users'
import styles from '../index.module.css'
import axios from 'axios';

const AuthenticationPage = ({ onLogin, history, setUsuario }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newSurname, setNewSurname] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [noUser, setNoUser] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleLogin = async () => {
    try {
      const response = await comprobarLogin({
        nombre: username,  // Utiliza el nombre de usuario ingresado en el campo de entrada
        password: password, // Utiliza la contraseña ingresada en el campo de entrada
      });
      console.log('Response:', response)


      const data = response.data;
      console.log(data)

      if (response.statusText === 'OK') {
        setTimeout(() => {
          console.log("Estoy dentro")
          onLogin();
          history.push('/');
        }, 100)

        return {
          IdUsuario: data.IdUsuario,
        }

      } else {
        console.log("No debo estar aqui")
        setMensajeError('Usuario o contraseña incorrectos.')
      }

      if (!noUser && !noPassword && password !== '' && data.some((item) => item.Username === username && item.Password === password)) {
        setCorrectPassword(true);
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMensajeError('Usuario o contraseña incorrectos.')
    }
  };



  const validateEmail = (email) => {
    const emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return emailPattern.test(email)
  }

  const validatePassword = (pss) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordPattern.test(pss);
  }

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setNewEmail(email);
    if (!validateEmail(email)) {
      setEmailError('Introcuce un correo electrónico válido.');
    } else {
      setEmailError('')
    }
  }

  const handlePssChange = (e) => {
    const pss = e.target.value;
    setNewPassword(pss);
    if (!validatePassword(pss)) {
      setPasswordError('La contraseña debe tener minimo 8 caracteres, una mayúscula, una minúscula y un número.')
    } else {
      setPasswordError('')
    }
  }


  const handleRegister = async () => {
    try {

      const userData = {
        newUsername: newUsername,
        newPassword: newPassword,
        newSurname: newSurname,
        newEmail: newEmail
      }

      const response = await comprobarRegister(userData);
      if (response.statusText === 'OK') {
        console.log(response)
        const dat = response.config.data;
        console.log(dat)
        // Usuario registrado exitosamente
        setTimeout(() => {
          console.log("Registro exitoso")
          onLogin();
          history.push('/');
        }, 100)

      } else {
        console.log("Error: ", response.data.message)
        setMensajeError(response.data.message);
      }
      // Resto del código para manejar la respuesta del backend
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setMensajeError('Error al registrar usuario. Por favor, inténtalo de nuevo más tarde.');
      // Resto del código para manejar el error
    }
  };

  const css = `.enlaceRegistro:hover{
    color: rgb(77, 77, 237);
  }
  .btnReg {
   background-color: #28a745
  }
  .btnReg:hover{
  background-color: #28703a;
  }

  .btnIni {
    background-color: #007bff;
  }
  .btnIni:hover{
    background-color: #30659d;
  }
  `;

  return (
    <div className={styles.autenticationCard}>
      {!showRegisterForm ? (
        <div className={styles.registerCard}>

          <h2 >Registrarse</h2>
          <div className={styles.divLabel}>
            <label htmlFor="newUsername">Nombre de usuario:</label>
            <input type="text" id="newUsername" name='newUsername' value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
          </div>
          <div className={styles.divLabel}>
            <label htmlFor="newSurname">Apellidos:</label>
            <input type="text" id="newSurname" name='newSurname' value={newSurname} onChange={(e) => setNewSurname(e.target.value)} />
          </div>
          <div className={styles.divLabel}>
            <label htmlFor="newEmail">Email:</label>
            <input type="text" id="newEmail" name='newEmail' value={newEmail} onChange={handleEmailChange} />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div className={styles.divLabel}>
            <label htmlFor="newPassword">Nueva Contraseña:</label>
            <input type="password" id="newPassword" name='newPassword' value={newPassword} onChange={handlePssChange} />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          </div>
          <button style={{ width: '100%', padding: '10px', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} className='btnReg' onClick={handleRegister} >Registrarse</button>
          <p style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }} className='enlaceRegistro' onClick={toggleForm}>¿Ya tienes una cuenta? Inicia sesión aquí</p>
          {mensajeError && (

            <p style={{ color: 'red', textAlign: 'center', padding: '3px' }}>{mensajeError}</p>
          )
          }
        </div>

      ) : (

        <div className={styles.loginCard}>
          <h2 >Iniciar Sesión</h2>
          <div className={styles.divLabel}>
            <label htmlFor="nombre" >Usuario:</label>
            <input type="text" id="nombre" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={styles.divLabel}>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button style={{ width: '100%', padding: '10px', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleLogin} className='btnIni'>Iniciar Sesión</button>
          <p style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }} className='enlaceRegistro' onClick={toggleForm}>¿No tienes cuenta? Regístrate aquí</p>
          {mensajeError && (

            <p style={{ color: 'red', textAlign: 'center', padding: '3px' }}>{mensajeError}</p>
          )
          }

        </div>
      )}
      <style>{css}</style>
    </div>
  );
};

export default AuthenticationPage;

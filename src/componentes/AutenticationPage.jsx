import React, { useState } from 'react';

const AuthenticationPage = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleLogin = async () => {
    // Aquí debes realizar una solicitud HTTP al backend para iniciar sesión
    // Enviar los datos de 'username' y 'password' al backend
    try {
      const response = await fetch('http://tu-backend.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      // Aquí puedes manejar la respuesta del backend, como establecer un token de sesión
      console.log(data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleRegister = async () => {
    // Aquí debes realizar una solicitud HTTP al backend para registrar un nuevo usuario
    // Enviar los datos de 'newUsername' y 'newPassword' al backend
    try {
      const response = await fetch('http://tu-backend.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
      });
      const data = await response.json();
      // Aquí puedes manejar la respuesta del backend, como mostrar un mensaje de éxito
      console.log(data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', background: '#fff' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', width: '300px' }}>
        {!showRegisterForm ? (
          <>
            <h2 style={{ textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)', textUnderlineOffset: '7px' }}>Registrarse</h2>
            <div style={{ marginBottom: '10px', padding: '10px' }}>
              <label htmlFor="newUsername" style={{ border: '0px' }}>Nuevo Usuario:</label>
              <input type="text" id="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', marginTop: '20px' }} />
            </div>
            <div style={{ marginBottom: '10px', padding: '10px' }}>
              <label htmlFor="newPassword" style={{ border: '0px' }}>Nueva Contraseña:</label>
              <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', marginTop: '20px' }} />
            </div>
            <button style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleRegister}>Registrarse</button>
            <p style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }} onClick={toggleForm}>¿Ya tienes una cuenta? Inicia sesión aquí</p>

          </>
        ) : (
          <>
            <h2 style={{ textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)', textUnderlineOffset: '7px' }}>Iniciar Sesión</h2>
            <div style={{ marginBottom: '10px', padding: '10px', gap: '2rem' }}>
              <label htmlFor="username" style={{ border: '0px' }}>Usuario:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', marginTop: '20px' }} />
            </div>
            <div style={{ marginBottom: '10px', padding: '10px' }}>
              <label htmlFor="password" style={{ border: '0px' }}>Contraseña:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', marginTop: '20px' }} />
            </div>
            <button style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleLogin}>Iniciar Sesión</button>
            <p style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }} onClick={toggleForm}>¿No tienes cuenta? Regístrate aquí</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthenticationPage;

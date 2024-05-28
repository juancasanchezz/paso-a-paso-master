// AdminPanel.js
import React, { useState } from 'react';
import AdministrarRutas from './AdministrarRutas';
import AdministrarUsuarios from './AdministrarUsuarios';
import { Button } from 'primereact/button';
import styles from '../index.module.css'

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const renderComponent = () => {
    if (activeComponent === 'routes') {
      return <AdministrarRutas />;
    } else if (activeComponent === 'users') {
      return <AdministrarUsuarios />;
    }
  };

  return (
    <div className={styles.contAdmin}>
      <h1>Panel de Administración</h1>
      <div style={{ marginBottom: '20px' }}>
        <Button label="Administrar Rutas" onClick={() => setActiveComponent('routes')} />
        <Button label="Administrar Usuarios" onClick={() => setActiveComponent('users')} style={{ marginLeft: '10px' }} />
      </div>
      {activeComponent && (
        renderComponent()

      )}
    </div>
  );
};

export default AdminPanel;

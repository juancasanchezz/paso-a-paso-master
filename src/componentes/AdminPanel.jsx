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
      <p className={styles.tituloAdminRuta}>Panel de Administración</p>
      <div className={styles.divBotonesAdmin}>
        <Button className={styles.btnAdmin} label="Administrar Rutas" onClick={() => setActiveComponent('routes')} />
        <Button className={styles.btnAdmin} label="Administrar Usuarios" onClick={() => setActiveComponent('users')} style={{ marginLeft: '10px' }} />
      </div>
      {activeComponent && (
        renderComponent()

      )}
    </div>
  );
};

export default AdminPanel;

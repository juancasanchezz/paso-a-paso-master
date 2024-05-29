// AdminUsers.js
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { deleteUser, obtenerUsuarios } from '../backend/users/users';
import styles from '../index.module.css'

function AdminUsers () {
  const [users, setUsers] = useState([]);

  const getUsuarios = async () => {
    const response = await obtenerUsuarios();
    const res = response.data.data;
    console.log(res)
    setUsers(res)
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const handleDelete = async (userId) => {
    const response = await deleteUser(userId)
    console.log(response);
  };

  return (
    <div className={styles.contAdminRutas}>
      <h1>Administrar Usuarios</h1>
      <DataTable value={users}>
        <Column
          header="Acciones"
          body={(rowData) => (
            <Button className={styles.btnEliminarAdmin} label="Eliminar" icon="pi pi-trash" onClick={() => handleDelete(rowData.id)} />
          )}
        />
        <Column field="id" header="ID" />
        <Column field="rol" header="Rol" />
        <Column field="nombre" header="Nombre" />
        <Column field="apellidos" header="Apellidos" />
        <Column field="mail" header="Correo" />
        <Column field="password" header="Contraseña" />
        <Column field="biografia" header="Bio" />
        <Column field="avatar" header="Foto" />
      </DataTable>
    </div>
  );
}

export default AdminUsers;

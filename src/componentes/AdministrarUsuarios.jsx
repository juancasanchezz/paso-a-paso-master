// AdminUsers.js
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { deleteUser, obtenerUsuarios } from '../backend/users/users';
import styles from '../index.module.css'

function AdminUsers () {
  const [users, setUsers] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);
  const [loading, setLoading] = useState(true);
  let rows = 5;

  const getUsuarios = async (first, rows) => {
    const response = await obtenerUsuarios();
    const res = response.data.data;
    console.log(res)
    setUsers(res.slice(first, first + rows))
    setTotalRecords(res.length);
    setLoading(false);
  }
  useEffect(() => {
    getUsuarios(first, rows);
  }, [first]);

  const handleDelete = async (userId) => {
    const response = await deleteUser(userId)
    console.log(response);
  };

  const onPage = (event) => {
    setFirst(event.first)
  };

  return (
    <div className={styles.contAdminRutas}>
      <p className={styles.tituloAdminRuta}>Administrar Usuarios</p>
      <DataTable className={styles.dataTabla}
        value={users}
        paginator
        rows={rows}
        totalRecords={totalRecords}
        first={first}
        onPage={onPage}
        lazy
        loading={loading}
      >
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
      <div style={{
        minHeight: '20px'
      }}></div>
    </div>
  );
}

export default AdminUsers;

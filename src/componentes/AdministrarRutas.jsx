// AdminRoutes.js
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { deleteRuta, obtenerRutas } from '../backend/users/users';
import styles from '../index.module.css'

function AdministrarRutas () {
  const [routes, setRoutes] = useState([]);


  const getRutas = async () => {
    const response = await obtenerRutas();
    const res = response.data.data;
    setRoutes(res)
    console.log(res)
  }
  useEffect(() => {
    getRutas();
  }, []);

  const handleEdit = (route) => {
    // Lógica para editar la ruta
  };

  const handleDelete = async (routeId) => {
    const response = await deleteRuta(routeId);
    console.log(response)
  };

  return (
    <div className={styles.contAdminRutas}>
      <h1>Administrar Rutas</h1>
      <DataTable value={routes}>
        <Column
          header="Acciones"
          body={(rowData) => (
            <div>
              {/* <Button label="Editar" icon="pi pi-pencil" onClick={() => handleEdit(rowData)} /> */}
              <Button label="Eliminar" icon="pi pi-trash" onClick={() => handleDelete(rowData.id)} />
            </div>
          )}
        />
        <Column field="id" header="ID" />
        <Column field="titulo" header="Nombre" />
        <Column field="descripcion" header="Descripción" />
        <Column field="ubicacion" header="Ubicacion" />
        <Column field='portada' header="Portada" />
        <Column field='dificultad' header="Dificultad" />
      </DataTable>
    </div>
  );
}

export default AdministrarRutas;

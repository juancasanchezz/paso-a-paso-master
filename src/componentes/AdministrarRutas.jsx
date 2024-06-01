// AdminRoutes.js
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { deleteRuta, obtenerRutas } from '../backend/users/users';
import styles from '../index.module.css'

function AdministrarRutas () {
  const [routes, setRoutes] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);
  const [loading, setLoading] = useState(true);
  let rows = 5;


  const getRutas = async (first, rows) => {
    setLoading(true)
    const response = await obtenerRutas();
    const res = response.data.data;
    setRoutes(res.slice(first, first + rows));
    setTotalRecords(res.length);
    setLoading(false);
  }
  useEffect(() => {
    getRutas(first, rows);
  }, [first]);

  const handleEdit = (route) => {
    // Lógica para editar la ruta
  };

  const handleDelete = async (routeId) => {
    const response = await deleteRuta(routeId);
    console.log(response)
    getRutas(first, rows);
  };

  const onPage = (event) => {
    setFirst(event.first)
  };

  return (
    <div className={styles.contAdminRutas}>
      <p className={styles.tituloAdminRuta}>Administrar Rutas</p>
      <DataTable className={styles.dataTabla}
        value={routes}
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
            <div>
              {/* <Button label="Editar" icon="pi pi-pencil" onClick={() => handleEdit(rowData)} /> */}
              <Button className={styles.btnEliminarAdmin} label="Eliminar" icon="pi pi-trash" onClick={() => handleDelete(rowData.id)} />
            </div>
          )}
        />
        <Column field="id" header="ID" />
        <Column field="titulo" header="Nombre" />
        <Column field="descripcion" header="Descripción" />
        <Column field="ubicacion" header="Ubicacion" />
        <Column field='dificultad' header="Dificultad" />
        <Column field='portada' header="Portada" />
      </DataTable>
    </div>
  );
}

export default AdministrarRutas;

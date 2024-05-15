import React from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import styles from '../index.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar ({ setIsLoggedIn }) {
  const history = useHistory();
  const handleLogOut = () => {
    setIsLoggedIn(false);
    history.push("/login")
  }
  const menu = [
    {
      label: 'Inicio', icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Ir a inicio', icon: 'pi pi-fw pi-pencil', to: '/inicio' }
      ]
    },
    {
      label: 'Rutas', icon: 'pi pi-fw pi-file',
      items: [
        { label: 'Nueva', icon: 'pi pi-fw pi-plus', to: '/rutas/nueva' },
        { label: 'Listado', icon: 'pi pi-fw pi-trash', to: '/rutas/listado' }
      ]
    },

    {
      label: 'Usuarios', icon: 'pi pi-fw pi-user',
      items: [
        { label: 'Perfil', icon: 'pi pi-fw pi-user-plus', to: '/usuarios/perfil' },
        { label: 'Borrar', icon: 'pi pi-fw pi-user-minus', },
      ]
    },

    { label: 'Abandonar', to: '/login', command: handleLogOut }
  ];




  const css = `
  .p-menubar.p-component {
    background-color: rgba(234, 234, 231, 0);
  }
  `

  return (


    <div className={styles.navbarCard}>
      <Menubar model={menu.map(item => {
        if (item.items) {
          return {
            ...item, items: item.items.map(subItem => {
              if (subItem.to) {
                return { ...subItem, url: subItem.to };
              }
              return subItem;
            })
          };
        }
        return item;
      })} />
      <style>{css}</style>
    </div>


  );
}

export default React.memo(Navbar);
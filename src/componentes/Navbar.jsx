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

  const handleHome = () => {
    history.push("/inicio")
  }


  const menu = [
    { label: 'Inicio', command: handleHome, },
    {
      label: 'Rutas',
      items: [
        { label: 'Nueva', icon: 'pi pi-fw pi-plus', to: '/rutas/nueva' },
        { label: 'Listado', icon: 'pi pi-align-justify', to: '/rutas/listado' }
      ]
    },

    {
      label: 'Usuarios',
      items: [
        { label: 'Perfil', icon: 'pi pi-fw pi-user-plus', to: '/usuarios/perfil' },
      ]
    },

    { label: 'Abandonar', command: handleLogOut }
  ];




  const css = `
  .p-menubar.p-component {
    background-color: rgba(234, 234, 231, 0);
  }
  `

  return (
    <div className={styles.navbarCard}>
      <Menubar
        model={menu.map(item => {
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
        })}
      />
      <style>{css}</style>
    </div>
  );
}

export default React.memo(Navbar);
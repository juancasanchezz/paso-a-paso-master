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

  const handleUser = () => {
    history.push("/usuarios/perfil")
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

    { label: 'Perfil', command: handleUser, },

    { label: 'Cerrar Sesión', command: handleLogOut }
  ];




  const css = `
  .p-menubar.p-component {
    background-color: rgba(234, 234, 231, 0);
  }

  @media (max-width: 600px) {


  .navbarMenu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgba(234, 234, 231, 0.8);
    top: 60px;
    /* Ajusta esto según la altura de tu navbar */
    left: 0;
    z-index: 1000;
  }

  .p-menubar.p-component.p-menubar-mobile-active {
    width: 100%;
  }

  .navbarMenu.open {
    display: flex;
  }

  .p-menubar-root-list {
    flex-direction: column;
    width: 100%;
  }

  .p-menubar-root-list .p-menuitem {
    width: 100%;
    text-align: center;
  }
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
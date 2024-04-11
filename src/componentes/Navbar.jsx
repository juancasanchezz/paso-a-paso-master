
import { React, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import style from '../style/navbar.module.css';

import FormularioNuevaRuta from "./FormularioNuevaRuta";
import ListaRutas from "./ListaRutas";
import ProfilePage from './ProfilePage';


/* const ListadoRutas = lazy(
  async () =>
    await import('./ListaRutas')
)
const NuevasRutas = lazy(
  async () =>
    await import('./FormularioNuevaRuta')
)
const PerfilUsuario = lazy(
  async () =>
    await import('./ProfilePage')
) */

export default function Navbar () {
  const menu = [
    {
      label: 'Rutas',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Nueva',
          icon: 'pi pi-fw pi-plus',
          to: '/nueva'


        },
        {
          label: 'Listado',
          icon: 'pi pi-fw pi-trash',
          to: '/listado'

        },
        {
          separator: true
        },
        {
          label: 'Exportar',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Editar',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Izquierda',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Derecha',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Centro',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justificar',
          icon: 'pi pi-fw pi-align-justify'
        },

      ]
    },
    {
      label: 'Usuarios',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Perfil',
          icon: 'pi pi-fw pi-user-plus',
          to: '/PerfilUsuario'
        },
        {
          label: 'Borrar',
          icon: 'pi pi-fw pi-user-minus',

        },
        {
          label: 'Buscar',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filtrar',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'Lista'
            }
          ]
        }
      ]
    },
    {
      label: 'Eventos',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'Editar',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Guardar',
              icon: 'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Borrar',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Archivo',
          icon: 'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Eliminar',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    },
    {
      label: 'Abandonar',
      icon: 'pi pi-fw pi-power-off'
    }
  ];
  const css = `
    .menu {
      height: 250px;
      display: flex;
      justify-content: center;
      padding: 0px;
       /* Ajusta el padding general de la barra de navegación según tus necesidades 
    }
    
    .menu > * {
      margin-right: 4px; /* Agrega espacio entre las opciones seleccionadas 
      gap: 2rem;
      padding: 0px;
    }
    
    label {
      font-size: 18px;
      align-items: center;
      border: solid 3px;
    }
    
    .p-menuitem-text {
      color: black;
      padding: 10px
    }
  `;
  return (
    <div className="card">
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
    </div>
  );
}

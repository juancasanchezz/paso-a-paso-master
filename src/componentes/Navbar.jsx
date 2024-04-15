
import { React } from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import styles from '../index.module.css'



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

export default function Navbar ({ isLoggedIn }) {
  const menu = [
    {
      label: 'Rutas',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Nueva',
          icon: 'pi pi-fw pi-plus',
          to: '/rutas/nueva'


        },
        {
          label: 'Listado',
          icon: 'pi pi-fw pi-trash',
          to: '/rutas/listado'

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
          to: '/usuarios/perfil'
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
  .p-menubar.p-component {
    background-color: rgba(234, 234, 231, 0);
  }
  `

  return (
    <>
      {isLoggedIn && (
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
      )}
    </>
  );
}

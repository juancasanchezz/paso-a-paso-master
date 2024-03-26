import { React, useState, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import FormularioNuevaRuta from "./componentes/FormularioNuevaRuta";
import ListaRutas from "./componentes/ListaRutas";
import AuthenticationPage from './componentes/AutenticationPage';
import "./App.css";
import UserProfile from './componentes/UserProfile';
import ProfilePage from './componentes/ProfilePage';

/* const ListadoRutas = lazy(
  async () =>
    await import('./componentes/ListaRutas')
)
const NuevasRutas = lazy(
  async () =>
    await import('./componentes/FormularioNuevaRuta')
)
const PerfilUsuario = lazy(
  async () =>
    await import('./componentes/ProfilePage')
) */


function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [rutasVisibles, setRutasVisibles] = useState(2);
  const [rutasGuardadas, setRutasGuardadas] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNavbarOption = (option) => {
    setSelectedOption(option);
  };

  const menu = [
    {
      items: [
        {

          label: 'Rutas',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'Nueva',
              icon: 'pi pi-fw pi-plus',
              to: '/NuevasRutas'


            },
            {
              label: 'Listado',
              icon: 'pi pi-fw pi-trash',
              to: '/ListaRutas'

            },
            {
              separator: true
            },
            {
              label: 'Exportar',
              icon: 'pi pi-fw pi-external-link'
            }
          ]
        }

      ]
    },
    {
      items: [
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
        }
      ]
    },
    {
      items: [
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
        }
      ]
    },
    {
      items: [
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
        }
      ]
    },
    {
      items: [
        {

          label: 'Abandonar',
          icon: 'pi pi-fw pi-power-off'
        }
      ]
    }
  ];

  return (
    <>
      <head className='app'>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div className='app'>
        <>
          <Router>
            <Switch>
              <Route exact path='/ListadoRutas' component={ListaRutas} />
            </Switch>
          </Router>
        </>
        {/* {/* <Router>
          {!isLoggedIn ? (
            <Routes>
              <Route path="/" element={<AuthenticationPage onLogin={handleLogin} />} />
            </Routes>
          ) : (
            <div>
              <Navbar />
              <hr />
              <ProfilePage />

              <Routes>
                <Route exact path="/ListadoRutas" element={<ListaRutas />} />
                <Route exact path="/NuevasRutas" element={<FormularioNuevaRuta />} />
                <Route exact path="/PerfilUsuario" element={<ProfilePage />} />
              </Routes>
            </div>
          )}
        </Router>
        <div style={{
          minHeight: '200px'
        }}></div> 
        <ListaRutas rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} rutasVisibles={rutasVisibles} setRutasVisibles={setRutasVisibles} />
        <ProfilePage rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} />
        <FormularioNuevaRuta />
        <AuthenticationPage />
        <div style={{
          minHeight: '200px'
        }}></div> */}
      </div>


    </>
  );
}

export default App;

import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormularioNuevaRuta from "./componentes/FormularioNuevaRuta";
import ListaRutas from "./componentes/ListaRutas";
import AuthenticationPage from './componentes/AutenticationPage';
import ProfilePage from './componentes/ProfilePage';
import Navbar from './componentes/Navbar';
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

  /* var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map); */

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNavbarOption = (option) => {
    setSelectedOption(option);
  };




  return (
    <div className='App'>
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
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""></script>
      </head>
      < Router >
        <Navbar />
        <Switch>
          <Route exact path="/rutas/nueva" component={FormularioNuevaRuta} />
          <Route exact path="/rutas/listado" component={ListaRutas} />
          <Route exact path="/usuarios/perfil" component={ProfilePage} />
          <Route exact path="/usuarios/login" component={AuthenticationPage} />

        </Switch>
      </Router >
    </div>
  );
}

export default App;

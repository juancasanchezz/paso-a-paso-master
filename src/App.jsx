import { React, useState, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import FormularioNuevaRuta from "./componentes/FormularioNuevaRuta";
import ListaRutas from "./componentes/ListaRutas";
import AuthenticationPage from './componentes/AutenticationPage';
import "./App.css";
import UserProfile from './componentes/UserProfile';
import ProfilePage from './componentes/ProfilePage';
const ListadoRutas = lazy(
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
)


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
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""></script>
      </head>
      <div className='app'>

        {/* <Router>
          <Routes>
            <Route exact path='/ListadoRutas' component={ListaRutas} />
          </Routes>
        </Router> */}

        <Router>
          {/*  {!isLoggedIn ? (
            <Routes>
              <Route path="/" element={<AuthenticationPage onLogin={handleLogin} />} />
            </Routes>
          ) : ( */}
          <div>
            <Navbar />
            <div id="map" style={{ height: '180px' }}></div>


            {/* <Routes>
              <Route exact path="/ListadoRutas" component={ListaRutas} />
              <Route exact path="/NuevasRutas" component={FormularioNuevaRuta} />
              <Route exact path="/PerfilUsuario" component={ProfilePage} />
            </Routes> */}
          </div>
          {/* )} */}
        </Router>
        {/* <div style={{
          minHeight: '200px'
        }}></div> */}
        <ListaRutas rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} rutasVisibles={rutasVisibles} setRutasVisibles={setRutasVisibles} />
        <ProfilePage rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} />
        <FormularioNuevaRuta />
        <AuthenticationPage />
        <div style={{
          minHeight: '200px'
        }}></div>
      </div>


    </>
  );
}

export default App;

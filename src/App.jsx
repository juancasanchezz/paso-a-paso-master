import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FormularioNuevaRuta from "./componentes/FormularioNuevaRuta";
import ListaRutas from "./componentes/ListaRutas";
import AuthenticationPage from './componentes/AutenticationPage';
import ProfilePage from './componentes/ProfilePage';
import Navbar from './componentes/Navbar';



const App = () => {

  const [usuario, setUsuario] = useState(0);
  const [idUser, setIdUser] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Recuperar el valor de isLoggedIn de sessionStorage, si está presente
    const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
  });



  useEffect(() => {
    // Guardar el valor de isLoggedIn en sessionStorage cuando cambie
    sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  console.log(idUser)

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
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <AuthenticationPage onLogin={() => setIsLoggedIn(true)} history={props.history} setUsuario={setUsuario} setIdUser={setIdUser} idUser={idUser} />} />
          <ProtectedRoute path="/" isLoggedIn={isLoggedIn}>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
            <Switch>
              <Route exact path="/home" component={() => <AuthenticationPage onLogin={() => setIsLoggedIn(true)} />} />
              <Route exact path='/home' />
              <Route exact path="/rutas/nueva" component={FormularioNuevaRuta} />
              <Route exact path="/rutas/listado" component={ListaRutas} />
              <Route exact path="/usuarios/perfil" component={() => <ProfilePage idUser={idUser} />} />
            </Switch>
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
};

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default App;

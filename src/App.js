import { React, useState, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import FormularioNuevaRuta from "./componentes/FormularioNuevaRuta";
import ListaRutas from "./componentes/ListaRutas";
import AuthenticationPage from './componentes/AutenticationPage';
import style from "./App.css";
import UserProfile from './componentes/UserProfile';
import ProfilePage from './componentes/ProfilePage';

function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNavbarOption = (option) => {
    setSelectedOption(option);
  };



  return (
    <>
      <head>
        <head>
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
      </head>
      <div className='app'>
        {/* <Router>
          {/* {!isLoggedIn ? (
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
          {/* )} 
        </Router>
        <div style={{
          minHeight: '200px'
        }}></div> */}
        <ListaRutas />
      </div>


    </>
  );
}

export default App;

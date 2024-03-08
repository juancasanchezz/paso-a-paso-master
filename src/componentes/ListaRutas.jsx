import React, { useState, useEffect } from "react";
import style from "../style/listaRutas.module.css";
import Modal from "./Modal"; // Asegúrate de importar el componente Modal

const ListaRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [rutaExpandida, setRutaExpandida] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rutasVisibles, setRutasVisibles] = useState(2);
  const [haExpandido, setHaExpandido] = useState(false);

  useEffect(() => {
    const obtenerRutasDesdeBackend = async () => {
      try {
        const data = [
          {
            id: 1,
            nombre: "Ruta 1",
            ubicacion: "Ubicación 1",
            kilometros: 10,
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
          },
          {
            id: 2,
            nombre: "Ruta 2",
            ubicacion: "Ubicación 2",
            kilometros: 15,
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
          },
          {
            id: 3,
            nombre: "Ruta 3",
            ubicacion: "Ubicación 2",
            kilometros: 15,
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
          },
          {
            id: 4,
            nombre: "Ruta 4",
            ubicacion: "Ubicación 2",
            kilometros: 15,
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
          },
          {
            id: 5,
            nombre: "Ruta 5",
            ubicacion: "Ubicación 2",
            kilometros: 15,
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
          },
          {
            id: 6,
            nombre: "Ruta 6",
            ubicacion: "Ubicación 2",
            kilometros: 15,
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
          },
          // ... más rutas
        ];

        setRutas(data);
      } catch (error) {
        console.error("Error al obtener las rutas:", error);
      }
    };
    setHaExpandido(true);

    obtenerRutasDesdeBackend();
  }, []);

  useEffect(() => {
    if(rutasVisibles <= 2 ){
      setHaExpandido(false)
    } else {
      setHaExpandido(true)
    }
  }, [rutasVisibles])

  const manejarExpansion = (id) => {
    setRutaExpandida((prevId) => (prevId === id ? null : id));
    setModalAbierto(true);
  };
  // console.log(rutasVisibles);

  /* Funcion para mostrar las rutas de dos en dos */
  const cargarMasRutas = () => {
    setRutasVisibles((prev) => prev + 2);
    
  };
  const cargarMenosRutas = () => {
    setRutasVisibles((prev) => prev - 2);
  };

  return (
    <>
    <div
      className={`rutas ${
        rutaExpandida !== null ? style.listaRutasExpandida : ""
      }`}
    >
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
      }}>
      <p
        style={{
          width: "200px",
          textDecoration: "none",
          fontSize: "30px",
          marginTop: "10px",
          color: "black",
          borderRadius: "5px ",
          background: "linear-gradient(#556B2F, #fff) border-box"     
        }}
      >
        Lista de Rutas
      </p>
      </div>
      <ul className={`${style.listaRutas} ${style.listaRutasExpandida}`}>
        {rutas.slice(0, rutasVisibles).map((ruta) => (
          <li
            style={{ width: "30%" }}
            key={ruta.id}
            className={`${style.listaRutasItem} ${
              rutaExpandida === ruta.id ? style.expandida : ""
            }`}
          >
            <div
              className={style.rutaCabecera}
              onClick={() => manejarExpansion(ruta.id)}
            >
              <p style={{ fontSize: "18px" }}>
                <b>{ruta.nombre}</b>
              </p>
              <p>{ruta.ubicacion}</p>
              <p>{`${ruta.kilometros} km`}</p>
            </div>
            {rutaExpandida === ruta.id && modalAbierto && (
              <Modal cerrarModal={() => setModalAbierto(false)}>
                {/* Contenido para mostrar en la tarjeta una vez expandida */}
                <p style={{ paddingTop: "2rem", color: "#fff" }}>
                  {ruta.descripcion}
                </p>
              </Modal>
            )}
          </li>
        ))}
      </ul>
      
    </div>
    <div style={{
      justifyContent: "center",
      display: "flex"
    }}>
    {rutasVisibles < rutas.length  && (
        <button
          style={{
            padding: "0.4rem",
            borderRadius: "5px",
            border: "0.2px solid #000",
            background: "linear-gradient(#556B2F, #fff) border-box",
            marginLeft: "10px",
            fontSize: "11px",
          }}
          className="btnRutas"
          onClick={cargarMasRutas}
        >
          Ver más
        </button>
      )}
      {haExpandido && (
        <button
          style={{
            padding: "0.4rem",
            borderRadius: "5px",
            border: "0.2px solid #000",
            background: "linear-gradient(#556B2F, #fff)",
            marginLeft: "10px",
            fontSize: "11px"
          }}
          className="btnRutas"
          onClick={cargarMenosRutas}
        >
          Ver menos
        </button>
      )}</div>
      </>
  );
};

export default ListaRutas;

import React from 'react'
import Photo from '../img/Captura de pantalla 2024-05-15 172041.png';

const Home = () => {
  return (
    <>
      <div style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        padding: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '50%',
          textAlign: 'center',
          transition: 'background-color 1.3s ease-out',
          /* border: '0px solid black',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgb(234, 234, 231, 0.8)', */
        }}>
          <p style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: '40px',
            textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
            textUnderlineOffset: '7px',
          }}>PASO A PASO</p>
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        listStyleType: 'none',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div className='quienes-somos' style={{
          width: '50%',
          height: '100%',
          padding: '2rem'
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            padding: '16px',
            transition: 'background-color 1.3s ease-out',
            border: '0px solid black',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgb(234, 234, 231, 0.9)',
          }}>
            <p style={{
              textAlign: 'center',
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
              textUnderlineOffset: '7px',
              fontSize: '30px',
              padding: '2rem'
            }}>¿Quiénes somos?</p>
            <p style={{
              color: "#1c1d1d96"
            }}>Somos un equipo de apasionados desarrolladores web con una visión compartida: crear un impacto significativo en la forma en que exploramos y experimentamos el país en el que vivimos. Nos mueve una ambición audaz: fomentar una comunidad nacional de viajeros que valoren la aventura y la conexión con la naturaleza.<br /><br />

              Nuestra historia comienza con la admiración por la belleza y la diversidad de nuestro planeta. Desde los majestuosos picos de las montañas hasta los exuberantes bosques tropicales y los pintorescos pueblos costeros, cada rincón del país tiene una historia que contar, un tesoro por descubrir. Nos inspira la idea de desenterrar estos tesoros ocultos y compartirlos con el país.<br /><br />

              Pero nuestra pasión va más allá de la exploración superficial. Nos enorgullece nuestro compromiso con el cuidado del medio ambiente y la promoción de prácticas sostenibles en el turismo. Creemos que cada paso que damos en la naturaleza debe ser un paso hacia adelante en la protección y preservación de nuestro entorno. Por eso, nos esforzamos por destacar destinos y actividades que respeten y celebren la biodiversidad, la ecología y la cultura locales.<br /><br />

              Únete a nosotros en nuestra misión para explorar, descubrir y proteger nuestro hermoso planeta. Juntos, podemos trazar un camino hacia un futuro más consciente, más conectado y más sostenible para todos.</p>
            <div style={{
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <img src={Photo} alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px'
                }} />
            </div>
          </div>
        </div>
        <div className='que-somos' style={{
          width: '100%',
          height: '100%',
          padding: '2rem',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            padding: '2rem',
            transition: 'background-color 1.3s ease-out',
            border: '0px solid black',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgb(234, 234, 231, 0.9)',
          }}>
            <p style={{
              textAlign: 'center',
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
              textUnderlineOffset: '7px',
              fontSize: '30px',
              padding: '2rem'
            }}>¿Qué es PASO A PASO?</p>
            <p style={{
              color: "#1c1d1d96"
            }}>¡Bienvenidos a PASO A PASO!

              Nuestra misión es simple pero poderosa: conectar a los viajeros con las joyas ocultas de nuestro país. ¿Cómo lo logramos? A través de una colaboración única entre los usuarios y nuestra plataforma, construimos una base de datos comunitaria de rutas poco conocidas, destinos fuera del radar turístico convencional, y lugares menos explorados pero igualmente fascinantes.<br />
              <br />
              Imagina descubrir un sendero serpenteante en un bosque exuberante sugerido por alguien que conoce la zona como la palma de su mano o gracias a la recomendación de un amigo. Estas son las experiencias que queremos ofrecer: la autenticidad de la exploración genuina, la emoción de lo inesperado y la riqueza de la diversidad cultural y natural que nuestro país tiene para ofrecer.
              <br />
              <br />
              En PASO A PASO, no solo buscamos enriquecer tus aventuras, sino también empoderarte para enriquecer las de otros. Cada ruta que agregas a nuestra base de datos no solo comparte un tesoro escondido contigo, sino que también lo hace accesible para una comunidad global de viajeros ávidos de nuevas experiencias. Tu conocimiento local, tus encuentros fortuitos y tus descubrimientos personales pueden convertirse en la próxima gran aventura para alguien más.
              <br />
              <br />
              Únete a nosotros en nuestro viaje para celebrar la diversidad del país, para desenterrar los tesoros escondidos que yacen bajo la superficie, y para compartir la alegría de explorar lo desconocido. Juntos, vamos más allá de los destinos turísticos populares, trazando un camino único hacia la autenticidad y la conexión genuina con los lugares que visitamos.
              <br />
              <br />
              ¡Únete a nuestra comunidad y comienza tu aventura hoy mismo!</p>
            <div style={{
              marginTop: '2rem'
            }}>
              <img src="https://www.lavanguardia.com/andro4all/hero/2021/03/Mejores-8-aplicaciones-gratuitas-para-hacer-senderismo-y-planificar-rutas-2.jpg?width=1200&aspect_ratio=16:9" alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px'
                }} />

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;
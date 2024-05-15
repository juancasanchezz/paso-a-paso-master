import React from 'react'


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
          border: '0px solid black',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgb(234, 234, 231, 0.8)',
        }}>
          <h1>PASO A PASO</h1>
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
        <div style={{
          height: '100%',
          width: '50%',
          padding: '16px',
          transition: 'background-color 1.3s ease-out',
          border: '0px solid black',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgb(234, 234, 231, 0.9)',
        }}>
          <h2 style={{
            textAlign: 'center',
            textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
            textUnderlineOffset: '7px',
          }}>¿Qué es PASO A PASO?</h2>
          <p style={{
            color: "#1c1d1d96"
          }}>¡Bienvenidos a PASO A PASO!

            Nuestra misión es simple pero poderosa: conectar a los viajeros con las joyas ocultas de nuestro mundo, una ruta a la vez. ¿Cómo lo logramos? A través de una colaboración única entre los usuarios y nuestra plataforma, construimos una base de datos comunitaria de rutas poco conocidas, destinos fuera del radar turístico convencional, y lugares menos explorados pero igualmente fascinantes.<br />
            <br />
            Imagina descubrir un sendero serpenteante en un bosque exuberante sugerido por alguien que conoce la zona como la palma de su mano, o tropezar con un café encantador en una calle lateral estrecha gracias a la recomendación de un amigo. Estas son las experiencias que queremos ofrecer: la autenticidad de la exploración genuina, la emoción de lo inesperado y la riqueza de la diversidad cultural y natural que nuestro mundo tiene para ofrecer.
            <br />
            <br />
            En PASO A PASO, no solo buscamos enriquecer tus aventuras, sino también empoderarte para enriquecer las de otros. Cada ruta que agregas a nuestra base de datos no solo comparte un tesoro escondido contigo, sino que también lo hace accesible para una comunidad global de viajeros ávidos de nuevas experiencias. Tu conocimiento local, tus encuentros fortuitos y tus descubrimientos personales pueden convertirse en la próxima gran aventura para alguien más.
            <br />
            <br />
            Únete a nosotros en nuestro viaje para celebrar la diversidad del mundo, para desenterrar los tesoros escondidos que yacen bajo la superficie, y para compartir la alegría de explorar lo desconocido. Juntos, vamos más allá de los destinos turísticos populares, trazando un camino único hacia la autenticidad y la conexión genuina con los lugares que visitamos.
            <br />
            <br />
            PASO A PASO: donde cada ruta cuenta una historia, y cada historia te lleva a un nuevo horizonte.
            <br />
            <br />
            ¡Únete a nuestra comunidad y comienza tu aventura hoy mismo!</p>
        </div>
        <div style={{
          height: '100%',
          width: '40%',
          padding: '16px',
          transition: 'background-color 1.3s ease-out',
          border: '0px solid black',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgb(234, 234, 231, 0.8)',
        }}>
          <h2 style={{
            textAlign: 'center',
            textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
            textUnderlineOffset: '7px',
          }}>¿Quiénes somos?</h2>
          <p style={{
            color: "#1c1d1d96"
          }}>Somos un equipo de apasionados desarrolladores web con una visión compartida: crear un impacto significativo en la forma en que exploramos y experimentamos el mundo que nos rodea. Nos mueve una ambición audaz: fomentar una comunidad global de viajeros que valoren la autenticidad, la aventura y la conexión con la naturaleza.<br /><br />

            Nuestra historia comienza con la admiración por la belleza y la diversidad de nuestro planeta. Desde los majestuosos picos de las montañas hasta los exuberantes bosques tropicales y los pintorescos pueblos costeros, cada rincón de la Tierra tiene una historia que contar, un tesoro por descubrir. Nos inspira la idea de desenterrar estos tesoros ocultos y compartirlos con el mundo, de abrir los ojos de los viajeros a la riqueza de la experiencia humana y natural que nos rodea.<br /><br />

            Pero nuestra pasión va más allá de la exploración superficial. Nos enorgullece nuestro compromiso con el cuidado del medio ambiente y la promoción de prácticas sostenibles en el turismo. Creemos que cada paso que damos en la naturaleza debe ser un paso hacia adelante en la protección y preservación de nuestro entorno. Por eso, nos esforzamos por destacar destinos y actividades que respeten y celebren la biodiversidad, la ecología y la cultura locales.<br /><br />

            En el corazón de nuestro equipo late una determinación inquebrantable: hacer de PASO A PASO una fuerza para el bien en el mundo. Creemos en el poder transformador del conocimiento compartido, en la capacidad de cada individuo para marcar una diferencia, y en la belleza de un mundo que se descubre paso a paso, ruta a ruta.<br /><br />

            Únete a nosotros en nuestra misión para explorar, descubrir y proteger nuestro hermoso planeta. Juntos, podemos trazar un camino hacia un futuro más consciente, más conectado y más sostenible para todos.</p>
        </div>
        {/* Otras secciones aquí */}
      </div>
      <div style={{
        height: '20vh',
      }}>
        <br />
      </div>
    </>
  )
}

export default Home;
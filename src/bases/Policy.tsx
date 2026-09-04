import React from "react";

const Policy: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <div style={{ marginBottom: '6rem', maxWidth: '800px' }}>
        <h1 className="title-massive" style={{ marginBottom: '2rem' }}>Privacidad</h1>
        <p className="text-xl" style={{ color: 'var(--text-muted)' }}>
          Términos de privacidad y protección de datos.
        </p>
      </div>

      <div className="vanguard-grid">
        <div className="vanguard-item-txt-left" style={{ order: 1, paddingRight: '2rem' }}>
          <p className="text-base" style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Última actualización de este aviso de privacidad: 03 de mayo, 2022.<br /><br />
            Yo (Valeria E. Guzmán Pérez) mejor conocida como Valeria Guzmán, propietaria de este sitio web (lieraguzman.com); respeto tu privacidad y estoy comprometida a proteger tus datos debidamente y acorde a los siguientes lineamientos:
          </p>
          <h2 className="title-massive" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem', textTransform: 'none' }}>¿Para qué fines utilizaremos tus datos personales?</h2>
          <p className="text-base" style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Los datos personales que recabamos de ti, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicitas:<br />
            - Respuesta a mensajes del formulario de contacto.
          </p>
          
          <h2 className="title-massive" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem', textTransform: 'none' }}>¿Qué datos personales utilizaremos para estos fines?</h2>
          <p className="text-base" style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: Datos de identificación y contacto.
          </p>

          <h2 className="title-massive" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem', textTransform: 'none' }}>Derechos ARCO</h2>
          <p className="text-base" style={{ opacity: 0.8, marginBottom: '1rem' }}>
            Tú tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Así mismo, es tu derecho solicitar la corrección de tu información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando consideres que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerte al uso de tus datos personales para fines específicos (Oposición).
          </p>
          <p className="text-base" style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Para el ejercicio de cualquiera de los derechos ARCO, debes enviar una petición vía correo electrónico a valeria_guzman@hotmail.com con tu Nombre completo, Domicilio, Teléfono, Correo electrónico, Copia de una identificación oficial y el Asunto «Derechos ARCO».
          </p>

          <h2 className="title-massive" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem', textTransform: 'none' }}>Tecnologías de rastreo</h2>
          <p className="text-base" style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Te informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear tu comportamiento como usuario(a) de internet. Los datos que obtenemos son identificadores, nombre de usuario y contraseñas de sesión.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
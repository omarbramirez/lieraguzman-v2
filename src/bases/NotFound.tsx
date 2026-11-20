import React from "react";

const Policy: React.FC = () => {
  return (
    <main className="container" role="main" aria-label="Aviso de privacidad">
      <section className="page-intro" aria-label="Privacidad – introducción">
        <h1 className="title-massive page-intro__title">Privacidad</h1>
        <p className="text-xl text-muted">
          Términos de privacidad y protección de datos.
        </p>
      </section>

      <article className="vanguard-grid" aria-label="Contenido del aviso de privacidad">
        <div className="vanguard-item-txt-left">
          <p className="body-muted body-muted--mb2">
            Última actualización de este aviso de privacidad: 03 de mayo, 2022.
          </p>

          <p className="body-muted body-muted--mb2">
            Yo (Valeria E. Guzmán Pérez), mejor conocida como Valeria Guzmán, propietaria
            de este sitio web (lieraguzman.com), respeto tu privacidad y estoy
            comprometida a proteger tus datos debidamente y acorde a los siguientes
            lineamientos:
          </p>

          <h2 className="title-massive text-3xl">
            ¿Para qué fines utilizaremos tus datos personales?
          </h2>
          <p className="body-muted">
            Los datos personales que recabamos de ti los utilizaremos para las
            siguientes finalidades que son necesarias para el servicio que solicitas:
          </p>
          <ul className="cv-list body-muted--mb2">
            <li className="cv-list__item">
              Respuesta a mensajes del formulario de contacto.
            </li>
          </ul>

          <h2 className="title-massive text-3xl">
            ¿Qué datos personales utilizaremos para estos fines?
          </h2>
          <p className="body-muted body-muted--mb2">
            Para llevar a cabo las finalidades descritas en el presente aviso de
            privacidad, utilizaremos los siguientes datos personales: Datos de
            identificación y contacto.
          </p>

          <h2 className="title-massive text-3xl">Derechos ARCO</h2>
          <p className="body-muted">
            Tú tienes derecho a conocer qué datos personales tenemos de ti, para qué
            los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo,
            es tu derecho solicitar la corrección de tu información personal en caso de
            que esté desactualizada, sea inexacta o incompleta (Rectificación); que
            la eliminemos de nuestros registros o bases de datos cuando consideres que
            la misma no está siendo utilizada adecuadamente (Cancelación); así como
            oponerte al uso de tus datos personales para fines específicos
            (Oposición).
          </p>
          <p className="body-muted body-muted--mb2">
            Para el ejercicio de cualquiera de los derechos ARCO, debes enviar una
            petición vía correo electrónico a{" "}
            <a
              href="mailto:valeria_guzman@hotmail.com?subject=Derechos%20ARCO"
              className="button-link button-link--upright"
            >
              valeria_guzman@hotmail.com
            </a>{" "}
            con tu Nombre completo, Domicilio, Teléfono, Correo electrónico, Copia de
            una identificación oficial y el Asunto «Derechos ARCO».
          </p>

          <h2 className="title-massive text-3xl">Tecnologías de rastreo</h2>
          <p className="body-muted body-muted--mb2">
            Te informamos que en nuestra página de internet utilizamos cookies, web
            beacons u otras tecnologías, a través de las cuales es posible monitorear
            tu comportamiento como usuario(a) de internet. Los datos que obtenemos son
            identificadores, nombre de usuario y contraseñas de sesión.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Policy;
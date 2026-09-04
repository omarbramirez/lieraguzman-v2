import React from "react";

const NotFound: React.FC = () => (
  <main className="container not-found" role="main" aria-label="Página no encontrada">
    <p className="title-massive not-found__number" aria-hidden="true">404</p>
    <h1 className="title-massive title-massive--5xl">Página No Encontrada</h1>
    <p className="text-xl text-muted">La ruta que intentas buscar no existe.</p>
  </main>
);

export default NotFound;
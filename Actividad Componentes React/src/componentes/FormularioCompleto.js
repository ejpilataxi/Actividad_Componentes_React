import React, { useState } from "react";
import Formulario from "./Formulario";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import InputEmail from "./InputEmail";
import InputTel from "./InputTel";
import InputURL from "./InputURL";
import InputSearch from "./InputSearch";
import Boton from "./Boton";

function FormularioCompleto() {
  // Estado para cada input
  const [formData, setFormData] = useState({
    texto: "",
    password: "",
    email: "",
    telefono: "",
    url: "",
    busqueda: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert("Formulario enviado:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container mt-5">
      <Formulario onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label>Texto:</label>
          <InputText
            name="texto"
            placeholder="Escribe texto"
            value={formData.texto}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <InputPassword
            name="password"
            placeholder="Escribe tu contraseña"
            value={formData.password}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <InputEmail
            name="email"
            placeholder="email@ejemplo.com"
            value={formData.email}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <label>Teléfono:</label>
          <InputTel
            name="telefono"
            placeholder="+593 999 999 999"
            value={formData.telefono}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <label>URL:</label>
          <InputURL
            name="url"
            placeholder="https://tusitio.com"
            value={formData.url}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <label>Búsqueda:</label>
          <InputSearch
            name="busqueda"
            placeholder="Buscar..."
            value={formData.busqueda}
            onChange={manejarCambio}
          />
        </div>
        <Boton texto="Enviar" />
      </Formulario>
    </div>
  );
}

export default FormularioCompleto;

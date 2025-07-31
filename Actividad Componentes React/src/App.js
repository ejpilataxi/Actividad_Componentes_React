import FormularioCompleto from "./componentes/FormularioCompleto";
import FormularioValidado from "./componentes/FormularioValidado";
import Tabla from "./componentes/Tabla";
import Lista from "./componentes/Lista";
import Titulo from "./componentes/Titulo";
import Parrafo from "./componentes/Parrafo";
import Enlace from "./componentes/Enlace";
import Imagen from "./componentes/Imagen";

function App() {
  // Datos de ejemplo para la tabla
  const cabeceraTabla = ["ID", "Nombre", "Edad"];
  const datosTabla = [
    [1, "Ana", 28],
    [2, "Luis", 34],
    [3, "Marta", 23],
  ];
  // Datos de ejemplo para la lista
  const elementosLista = ["Manzana", "Banana", "Pera", "Uva"];

  return (
    <div className="container my-5">
      <Titulo texto="Demostración de Componentes" nivel={1} />

      <Parrafo texto="Vamos a mostrar todos nuestros componentes personalizados creados con React." />

      <section className="my-5">
        <Titulo texto="Formulario Completo" nivel={3} />
        <FormularioCompleto />
      </section>

      <section className="my-5">
        <Titulo texto="Tabla de Usuarios" nivel={3} />
        <Tabla titulo="Usuarios" cabecera={cabeceraTabla} datos={datosTabla} />
      </section>

      <section className="my-5">
        <Titulo texto="Lista de Frutas" nivel={3} />
        <Lista titulo="Frutas" elementos={elementosLista} />
      </section>

      <section className="my-5">
        <Titulo texto="Enlaces útiles" nivel={3} />
        <Enlace
          href="https://reactjs.org"
          texto="Documentación oficial de React"
        />
        <br />
        <Enlace href="https://mui.com" texto="Material-UI (MUI)" />
        <br />
        <Enlace href="https://react-hook-form.com" texto="React Hook Form" />
      </section>

      <section className="my-5 ">
        <Titulo texto="Imagen de ejemplo" nivel={3} />
        <div className="text-center mb-3">
          <Imagen
            src=data:https://www.itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-scaled.jpg"
            alt="Imagen"
            titulo="Placeholder Image"
          />
        </div>
      </section>

      <section className="my-4">
        <Titulo texto="Formulario Validado" nivel={3} />
        <FormularioValidado titulo="Es mi formulario validado" />
      </section>
    </div>
  );
}

export default App;

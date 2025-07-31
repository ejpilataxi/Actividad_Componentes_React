import Titulo from "./Titulo";

function Tabla({ titulo, cabecera, datos }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-info text-white">
        <Titulo texto={titulo} nivel="3" />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered m-0">
          <thead className="table-light">
            <tr>
              {cabecera.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datos.map((fila, i) => (
              <tr key={i}>
                {fila.map((celda, j) => (
                  <td key={j}>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabla;

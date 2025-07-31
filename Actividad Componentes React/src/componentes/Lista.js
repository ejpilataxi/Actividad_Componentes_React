import Titulo from "./Titulo";

function Lista({ titulo, elementos }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <Titulo texto={titulo} nivel="3" />
      </div>
      <ul className="list-group list-group-flush">
        {elementos.map((el, i) => (
          <li key={i} className="list-group-item">{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;

function Formulario({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="p-4 border rounded shadow-sm bg-light">
      {children}
    </form>
  );
}

export default Formulario;

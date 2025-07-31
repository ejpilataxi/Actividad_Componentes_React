function Enlace({ texto, url }) {
  return (
    <a href={url} className="btn btn-link">
      {texto}
    </a>
  );
}

export default Enlace;

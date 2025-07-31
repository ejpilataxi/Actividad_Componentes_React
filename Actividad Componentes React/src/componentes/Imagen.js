function Imagen({ src, alt, width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="img-fluid"
    />
  );
}

export default Imagen;
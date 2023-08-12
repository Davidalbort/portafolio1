function Image({ src, alt }) {
  return (
    <figure className="container-image">
      <img src={src} alt={alt} />
    </figure>
  )
}

Image.defaultProps = {
  src: '',
  alt: '',
}

export { Image }

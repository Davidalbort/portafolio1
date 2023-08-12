function Section({ typeTitle, nameTitle, paragraph, className, id }) {
  const createTitle =
    typeTitle === 'h1' ? (
      <h1>{nameTitle}</h1>
    ) : typeTitle === 'h2' ? (
      <h2>{nameTitle}</h2>
    ) : typeTitle === 'h3' ? (
      <h3>{nameTitle}</h3>
    ) : (
      <h4>{nameTitle}</h4>
    )

  return (
    <section className={className} id={id}>
      {createTitle}
      <p>{paragraph}</p>
    </section>
  )
}

Section.defaultProps = {
  typeTitle: '',
  nameTitle: '',
  paragraph: '',
  className: '',
  id: '',
}

export { Section }

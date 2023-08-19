function Icon({ listIcon, titleIcon }) {
  let createListIcon = listIcon.map((icon) => (
    <i key={icon} className={icon}>
      {titleIcon}
    </i>
  ))

  return <div className="container-icon">{createListIcon}</div>
}

Icon.defaultProps = {
  listIcon: [],
  titleIcon: '',
}

export { Icon }

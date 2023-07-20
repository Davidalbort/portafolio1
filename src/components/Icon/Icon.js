function Icon ({listIcon,titleIcon}){
    let createListIcon = listIcon.map(icon => <i className={icon}>{titleIcon}</i>);
 
    return(
      <div className="container-icon">
        {createListIcon}
      </div>
    )
  }
  
  Icon.defaultProps = {
    listIcon: [],
    titleIcon: ''
  }
  
  export {Icon};
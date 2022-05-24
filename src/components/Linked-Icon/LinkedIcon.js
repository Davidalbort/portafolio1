import '../../assets/icons/font-awesome.css'
import styles from '../../styles/components/LinkedIcon.module.scss';

function LinkedIcon({list}){
    const createLinkedIcon = list.map(linkedIcon => <a href={linkedIcon.iconLink}><i className={linkedIcon.icon}></i></a>); 
    
    return(
        <div className={styles.container}>
        {createLinkedIcon}
        </div>
    )
}
LinkedIcon.defaultProps = {
    list: [{iconLink:'https://www.linkedin.com/in/roger-david-alba-ortega-714077181/', icon:'fa-brands fa-linkedin'}, {iconLink:'https://github.com/Davidalbort', icon:'fa-brands fa-github'}]
}

export {LinkedIcon};
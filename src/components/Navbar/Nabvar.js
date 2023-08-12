import styles from '../../styles/components/Navbar.module.scss'
import { Link } from '../Link/Link'

function Nabvar() {
  const listLink = ['Inicio', 'Acerca de mi', 'Portafolio', 'Contacto']
  const typeList = 'ol'
  return (
    <nav className={styles.container}>
      <Link listLink={listLink} typeList={typeList} />
    </nav>
  )
}

export { Nabvar }

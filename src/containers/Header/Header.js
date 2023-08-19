import { Icon } from '../../components/Icon/Icon'
import { Nabvar } from '../../components/Navbar/Nabvar'
import styles from '../../styles/containers/Header.module.scss'

function Header() {
  const titleIcon = '<DAVIDALBORT/>'
  const listIcon = ['DAVIDALBORT']
  return (
    <header className={styles.container}>
      <Icon titleIcon={titleIcon} listIcon={listIcon} />
      <Nabvar />
    </header>
  )
}

export { Header }

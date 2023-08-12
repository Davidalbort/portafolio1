import { Linkedin } from '@/components/Icon/Linkedin'
import styles from '../../styles/containers/Footer.module.scss'
import { Git } from '@/components/Icon/Git'

function Footer(paragraph) {
  return (
    <footer className={styles.container}>
      <Linkedin />
      <Git />
      <p>© 2022 Roger David Alba Ortega todos los derechos reservados.</p>
    </footer>
  )
}

export { Footer }

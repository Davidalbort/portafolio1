
import styles from './page.module.css'
import {Header} from '../containers/Header/Header'
import {Main} from '../containers/Main/Main'
import {Footer} from '../containers/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}

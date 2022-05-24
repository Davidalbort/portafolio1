import { LinkedIcon } from "../../components/Linked-Icon/LinkedIcon";
import styles from '../../styles/containers/Footer.module.scss';

function Footer(paragraph) {
    return(
        <footer className={styles.container}>
            <LinkedIcon/>
            <p>© 2022 Roger David Alba Ortega todos los derechos reservados.</p>
        </footer>
    )
}

export {Footer};
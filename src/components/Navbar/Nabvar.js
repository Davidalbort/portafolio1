

import '../../assets/Navbar.scss'
import { Link } from '../Link/Link';

function Nabvar (){
    const listLink = ['Inicio','Acerca de mi','Portafolio', 'Contacto'];
    const typeList = 'ol';
    return(
        <nav className="main-nav">

        <Link
            listLink={listLink}
            typeList={typeList}
        />

        </nav>
    )
}

export {Nabvar};
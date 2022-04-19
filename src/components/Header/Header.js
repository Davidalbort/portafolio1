import { Icon } from "../Icon/Icon";
import { Nabvar } from "../Navbar/Nabvar";
import '../../assets/Header.scss'

function Header (){
    const titleIcon = 'DAVIDALBORT';
    const listIcon = ['DAVIDALBORT'];
    return(
        <header className="main-header">
            <Icon 
                titleIcon={titleIcon}
                listIcon={listIcon  }

            />
            <Nabvar/>
        </header>
    )
}

export {Header};
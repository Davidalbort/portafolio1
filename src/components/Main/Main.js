import '../../assets/Main.scss'
import { Section } from '../Section/Section';
import {Image} from '../Image/Image';
import {List} from '../List/List';
import { Link } from '../Link/Link';


function Main (){
    const sourceImage= require('../Image/B-3x3.jpg');
    const textAlt = 'Imagen de presentación';
    const listIcon = ['HTML','CSS','GIT','GITHUB','JAVASCRIPT','REACT JS', 'TYPESCRIPT'];
    const typeList = 'ul';
    return(
        <main className="main">
        
            
        <section className="main__section main__section--name" id='Inicio' >
            <h1 >HOLA, MI NOMBRE ES ROGER DAVID ALBA ORTEGA</h1>
            <p>Soy ingeniero electrónico, apasionado por la tecnología</p>
        </section>
        <section className="main__section" id='Acerca de mi' >
            <h1 >ACERCA DE MI</h1>
            <div className='container-contain'>
            <div className='container-image'>
            <Image
                src={sourceImage}
                textAlt={textAlt}
            />
            <h2 >@DAVIDALBORT</h2>
            <p>Front End Developer | HTML | CSS | GITHUB | React js | Typescript</p>
            </div>
            <p>Soy colombiano, amante de la tecnología, enfocado en el desarrollo web en la parte de Frontend. 
                Aprendiendo día a día de forma autodidacta y en la plataforma de Platzi. 
            </p>
            <h2>Especialidades </h2>
            <List
                listItem={listIcon}
                typeList={typeList}
            />
            </div>
        </section>
        <section className="main__section" id='Portafolio'>
            <h1 >PORTAFOLIO</h1>
            <h2> Apps desarrolladas</h2>
            <ul>
                <li>
                    <a href='https://github.com/Davidalbort/Cajero'>Cajero Automático</a>
                </li>
                <li>
                    <a href='https://github.com/Davidalbort/stac-app'>Stac-app</a>
                </li>
                <li>
                    <a href='https://github.com/Davidalbort/landing-page'>Landing-page</a>
                </li>
                <li>
                    <a href='https://github.com/Davidalbort/spa-rickandmorty'>Spa-Rickandmorty</a>
                </li>
            </ul>
        </section>
        <section className="main__section" id='Contacto'>
            <h1 >CONTACTO</h1>
            <div>
                <i class="fa-solid fa-location-dot"></i>
                Cúcuta, Colombia
            </div>
            <div>
                 <i className="fa-solid fa-envelope"></i>
                <a href="mailto:rogerdavidalbaortega@gmail.com">rogerdavidalbaortega@gmail.com</a> 
            </div>
        </section>
        </main>
    )
}

export {Main};
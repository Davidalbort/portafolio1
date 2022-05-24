import styles from '../../styles/containers/Main.module.scss';
import {Image} from '../../components/Image/Image';
import {List} from '../../components/List/List';



function Main (){
    const sourceImage= require('../../components/Image/B-3x3.jpg');
    const textAlt = 'Imagen de presentación';
    const listIcon = ['Html','Css','Git','GitHub','Javascript','React Js', 'Typescript'];
    const typeList = 'ul';
    return(
        <main className={styles.container}>
        
            
        <section className={`${styles.section} ${styles.name}`} id='Inicio' >
            <h1 >HOLA, MI NOMBRE ES ROGER DAVID ALBA ORTEGA</h1>
            <p>Soy ingeniero electrónico, apasionado por la tecnología.</p>
        </section>
        <section className={styles.section}  id='Acerca de mi' >
            <h1 >ACERCA DE MI</h1>
            <div className={styles.image}>
            <Image
                src={sourceImage}
                textAlt={textAlt}
            />
            <h2 ><a href='https://github.com/Davidalbort'>@DAVIDALBORT</a></h2>
            <p>Front End Developer | Html | Css | GitHub | React Js | Typescript</p>
            </div>
            <div className='container-contain'>
            <h2>¿Quién soy?</h2>
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
        <section className={styles.section} id='Portafolio'>
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
        <section className={styles.section} id='Contacto'>
            <h1 >CONTACTO</h1>
            <div className={styles.contact}>
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    Cúcuta, Colombia
                </div>
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:rogerdavidalbaortega@gmail.com">rogerdavidalbaortega@gmail.com</a> 
                </div>
            </div>
        </section>
        </main>
    )
}

export {Main};
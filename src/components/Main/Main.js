import '../../assets/Main.scss'
import { Section } from '../Section/Section';
import {Image} from '../Image/Image';
import {List} from '../List/List';


function Main (){
    const sourceImage= require('../Image/B-3x3.jpg');
    const textAlt = 'Imagen de presentación';
    const listIcon = ['HTML','CSS','GIT','GITHUB','JAVASCRIPT','REACT JS'];
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
            <p>Front End Developer | HTML | CSS | GITHUB | React js</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias, modi maxime nam nemo eligendi ducimus delectus rerum nisi 
            aspernatur eveniet non nesciunt, porro ipsa quisquam consequatur consectetur veniam incidunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias, modi maxime nam nemo eligendi ducimus delectus rerum nisi 
            aspernatur eveniet non nesciunt, porro ipsa quisquam consequatur consectetur veniam incidunt!</p>
            <h2>Especialidades</h2>
            <List
                listItem={listIcon}
                typeList={typeList}
            />
            </div>
        </section>
        <section className="main__section" id='Portafolio'>
            <h1 >PORTAFOLIO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias, modi maxime nam nemo eligendi ducimus delectus rerum nisi 
            aspernatur eveniet non nesciunt, porro ipsa quisquam consequatur consectetur veniam incidunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias, modi maxime nam nemo eligendi ducimus delectus rerum nisi 
            aspernatur eveniet non nesciunt, porro ipsa quisquam consequatur consectetur veniam incidunt!</p>
        </section>
        <section className="main__section" id='Contacto'>
            <h1 >CONTACTO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias, modi maxime nam nemo eligendi ducimus delectus rerum nisi 
            aspernatur eveniet non nesciunt, porro ipsa quisquam consequatur consectetur veniam incidunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias, modi maxime nam nemo eligendi ducimus delectus rerum nisi 
            aspernatur eveniet non nesciunt, porro ipsa quisquam consequatur consectetur veniam incidunt!</p>
        </section>
        </main>
    )
}

export {Main};
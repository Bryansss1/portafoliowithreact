import { useState } from 'react'
import './App.css'
import menuimg from "./assets/img/Íconos/menu1.png"
import linkedinimg from "./assets/img/Íconos/linkedin.svg"
import mailimg from "./assets/img/Íconos/mail 1.svg"
import mobileimg from "./assets/img/Íconos/mobile.svg"
import phoneimg from "./assets/img/Íconos/phone.svg"
import webimg from "./assets/img/Íconos/web.svg"
import motionimg from "./assets/img/Íconos/motion.svg"
import ecommercelandingpage1 from "./assets/img/proyects/ecommerce1.png"
import ecommercecompleto from "./assets/img/proyects/ecommerce2.png"
import spacepage from "./assets/img/proyects/pagespacephoto.png"
import pokeapiimg from "./assets/img/proyects/pokeapi.png"
import rickymortyimg from "./assets/img/proyects/rick.png"
import papergame from "./assets/img/proyects/papelgame.png"
import usercrud from "./assets/img/proyects/userscrud.png"
import passwordgenerator from "./assets/img/proyects/generator.png"
import climaappimg from "./assets/img/proyects/climaapp.png"
import jobsmatchimg from "./assets/img/proyects/jobsapkproyect.png"

function App() {
const [tecnosButton,setTecnobutton]=useState(false)
const [proyectsButton,setPoryectsbutton]=useState(false)
//a
  return (
    <div className='burbujas'>
        <div className='burbu'></div>
        <div className='burbu'></div>
        <div className='burbu'></div>
        <div className='burbu'></div>
        <div className='burbu'></div>
        <div className='burbu'></div>
        <div className='burbu'></div>
    <div className="App">
      <header>
        <nav className="nav-bloque-principal">
            <input type="checkbox" id="check" className="nav-input"/>
            <label htmlFor="check" className="bar-btn">
                <img src={menuimg} alt="icono menu" className="img-menu"/>
            </label>
            
            <ul className="nav-menu">
            
                <li><a className="menu-item" href="index.html">Home</a></li>
            
            
                 <li><a href="index.html#about" className="menu-item">About me</a></li>
            
           
                 <li><a className="menu-item" href="#proye">Proyects</a></li>
            
                 <li><a className="menu-item" href="#contact">Contact</a></li>
            
                <li><a className="menu-item" href="https://github.com/Bryansss1" target="_blank">Github</a></li>
            
            </ul>
        </nav>
        <section className="perfil">
            <div className="contenido-perfil" >
                <img src="https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif" alt="" className="perfil-img"/>
                <h3  id="about" className="text-perfil">Hola soy Bryan S / Hi I am Bryan S</h3>
                <p className="text-perfil">Desarrollador Web Full-stack<span>|</span></p>
            </div>
            <p className="iconos-p tu eee">contactame <span>!</span></p>
            <div className="iconos-perfil">
                <a href="https://www.linkedin.com/in/bryan-david-sanabria-azuaje-025040253/" target="_blank"><img src={linkedinimg}alt="" /></a>
                <a href="https://github.com/Bryansss1" target="_blank"><img src="https://www.pngarts.com/files/8/Github-Logo-PNG-Pic.png" alt="" /></a>
                <a className="iiii" href="/src/cv/bryan cv friendlybot PDF 2023.docx" target="_blank" download="/src/cv/bryan cv friendlybot PDF 2023.docx">Descargar CV<i className='bx bx-receipt iii'></i></a>
            </div>
        </section>
    </header>
    <main>
        <section className="acercademi">

            <article className="seccion-acerca-de-mi">
                <h3>Acerca de mi <i className='bx bx-child'></i></h3>
                <p>Soy un Desarrollador energetico,me gusta seguir un aprendizaje constante y utilizar el conocimiento adquiero para evolucionar mis proyectos y destacar siempre mi trabajo</p>
                <ul>
                    <li><i className='bx bx-food-menu'></i> Rapidez en los Desarrollos de los proyectos</li>
                    <li><i className='bx bx-show'></i> Adaptablidad al entorno</li>
                    <li><i className='bx bx-check-shield'></i> Responsable</li>
                    <li><i className='bx bx-cool' ></i> Excelente trabajando en equipo</li>
                    <li><i className='bx bxs-book-bookmark'></i> Apoyo a nuevos proyectos</li>
                </ul>
                </article>

                <article className="seccion-acerca-de-mi-2">
                <img src="http://www.clickmee.in/assets/aboutus.gif" alt=""/>
                <h4 className="tu eee">Contactame <span>!</span></h4>
                    <p>Trabajemos juntos</p>
                <div className="iconzzz">
                <a href="https://www.linkedin.com/in/bryan-david-sanabria-azuaje-025040253/" target="_blank"><img src={linkedinimg} alt="linkedin logo"/></a>
                <a href="https://github.com/Bryansss1" target="_blank"><img src="https://www.pngarts.com/files/8/Github-Logo-PNG-Pic.png" alt="github logo" /></a>
                <a className="iiii" href="/src/cv/bryan cv friendlybot PDF 2023.docx" target="_blank" download="/src/cv/bryan cv friendlybot PDF 2023.docx">Descargar CV<i className='bx bx-receipt iii'></i></a>
                </div>
                
                </article>

            
        </section>

        <section >
             <h3 className="habilidades-title">Mis habilidades</h3>
            <article className="seccion-habilidades">
               
                <div className="item-habilidades">
                    <img src={mobileimg} alt="mobile image"/>
                    <p>Mobile app desing</p>
                </div>
                <div className="item-habilidades">
                    <img src={motionimg} alt="motion image"/>
                    <p>Motion Desing</p>
                </div>
                <div className="item-habilidades">
                    <img height="125px" width="160px" src="https://www.educative.io/v2api/editorpage/6474950975160320/image/5418859092770816" alt="database image"/>
                    <p>Manejo de bases de datos</p> 
                </div>
                <div className="item-habilidades">
                    <img src={webimg} alt="web image"/>
                    <p>Desarrollo Web</p>
                </div>
            </article>
        </section>

        <section className="tecno">

{tecnosButton?(
<>
<div className='tecnobutton'>
<i style={{color:"purple"}} onClick={()=>setTecnobutton(!tecnosButton)} className='bx bxs-toggle-left'></i>
<h3>Tecnologias <span style={{color:"purple"}} className='tecnoname'>Backend</span></h3>
</div>
  <ul className="tecnologias">
      <li><img src="https://d1.awsstatic.com/logos/opensource%20logos/PostgreSQL_logo.3colors.540x557.ebfae0ecff1f9f5783f59493d21ec94947d0d79d.png" alt="postgresQL png"/><small style={{animation:"pur infinite 3s"}}>POSTGRESQL</small></li>
      <li><img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="vite"/><small style={{animation:"pur infinite 3s"}}>NODE.JS</small></li>
      <li><img src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" alt="express"/><small style={{animation:"pur infinite 3s"}}>EXPRESS FRAMEWORK</small></li>
      <li><img src="https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png" alt="Redux react"/><small style={{animation:"pur infinite 3s"}}>JWT JSONWEBTOKEN</small></li>
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="js"/> <small style={{animation:"pur infinite 3s"}}>JAVASCRIPT</small></li>
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="TS"/> <small style={{animation:"pur infinite 3s"}}>TYPESCRIPT</small></li>
      <li><img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png" alt="Mongodb"/> <small style={{animation:"pur infinite 3s"}}>MONGODB</small></li>
      <li><img src="https://nodemailer.com/nm_logo_200x136.png" alt="tailwind"/> <small style={{animation:"pur infinite 3s"}}>NODEMAILER</small></li>
    </ul></>):(
<>
<div className='tecnobutton'>
<i style={{color:"blue"}} onClick={()=>setTecnobutton(!tecnosButton)} className='bx bxs-toggle-right'></i>
  <h3>Tecnologias <span style={{color:"blue"}} className='tecnoname'>Frontend</span></h3>
</div>
  <ul className="tecnologias">
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react png"/><small>REACT</small></li>
      <li><img src="https://camo.githubusercontent.com/3b6aa33b897ecdf82b578f52a5a30ded5ab3f9b3b5d86886e61db49e141424c6/68747470733a2f2f63646e2e67756473656e2e636f6d2f323032312f30392f33302f61663930626163383061393434376631383135366532353165636263316466662e706e67" alt="vite"/><small>VITE + REACT</small></li>
      <li><img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png" alt="javascr,css,html"/><small>JS,CSS,HTML5</small></li>
      <li><img src="https://images.velog.io/images/sonofhuman20/post/7c171f4f-2b5c-45b8-928c-21ba4618c769/redux.png" alt="Redux react"/><small>REACT REDUX</small></li>
      <li><img src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="Router react"/> <small>REACT ROUTER</small></li>
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" alt="sass"/> <small>SASS</small></li>
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="Boostrap"/> <small>BOOTSTRAP</small></li>
      <li><img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1-2.svg" alt="tailwind"/> <small>TAILWIND</small></li>
    </ul></>
)}
</section>
        <section>
            {proyectsButton?(
                <>
                <div className='tecnobutton'>
                <i style={{color:"purple"}} onClick={()=>setPoryectsbutton(!proyectsButton)} className='bx bxs-toggle-right'></i>
                <h3 className="portafolio-title" id="proye">Portafolio <span style={{color:"purple"}}>Full-stack</span></h3>
                </div>
                <article className="imagenes-portafolio">
                   <a target="_blank" href='https://drive.google.com/file/d/1_O4-ALxqtAJCpUVFBdqVeTRrsUUrFRzf/view?usp=sharing'><p>Jobs match</p> <p>Tecnologias:React-native|style-components|typescript|Api|Node.js|postgreSQL|express|Javascript</p> <img src={jobsmatchimg} target="_blank" alt="clima app"/> <p className="alo">Una aplicacion de busqueda de trabajo Pruebala!</p></a>
                   <a target="_blank" href="https://ecommerce2y.netlify.app/"><p>Ecommerce 2</p> <p>Tecnologias:React+vite| Axios| Api| Css Boostrap| Javascript| React redux| React router |sweetAlertv2</p> <img src={ecommercecompleto} target="_blank" alt="ecommerce2"/> <p className="alo">Un Ecommerce completo con funcionalidades de carrito de compras, login,buscador,filtrados entre otras</p></a>
                   <a target="_blank" href="https://pokewikii.netlify.app/"><p>Pokewiki</p> <p>Tecnologias:React+vite| Axios| Api| Css Boostrap Sass| Javascript| React redux| React router |sweetAlertv2</p> <img src={pokeapiimg} target="_blank" alt="pokeaqpi"/> <p className="alo">Una wikipedia de Pokemon que ofrece informacion de todos los personajes de la franquicia</p> </a>
                   <a target="_blank" href="https://wikipedia-rick-and-morty.netlify.app/"><p>RickandmortyWiki</p> <p>Tecnologias:React+vite| Axios| Api| Css| Javascript</p> <img src={rickymortyimg} target="_blank" alt="proyecto2"/> <p className="alo">Wikipedia de la serie de rick and morty donde muestra informacion de todos los personajes de la serie</p></a>
                   <a target="_blank" href="https://userscrudd.netlify.app/"> <p>Users crud</p> <p>Tecnologias:React+vite| Axios| Api| Css | Javascript|</p> <img src={usercrud} target="_blank" alt="proyecto3"/> <p className="alo">Una interfaz sobre registro y edicion de usuarios</p></a>
                   <a target="_blank" href="https://clima-app-bryansss1.netlify.app/"><p>Clima app</p> <p>Tecnologias:React+vite| Css| Javascript| Api</p> <img src={climaappimg} target="_blank" alt="clima app"/> <p className="alo">Una interfaz que estudia y muestra el clima de tu zona</p></a>
                </article>
                </>
            ):(<><div className='tecnobutton'>
                <i style={{color:"blue"}} onClick={()=>setPoryectsbutton(!proyectsButton)} className='bx bxs-toggle-left'></i>
                <h3 className="portafolio-title" id="proye">Portafolio <span style={{color:"blue"}}>Frontend</span></h3>
                </div>
                <article className="imagenes-portafolio">
                   <a target="_blank" href="https://jobsmatch.netlify.app/"><p>Jobs match landing page</p> <p>Tecnologias:React+vite|Html5|Css|Javascript</p><img src={jobsmatchimg} target="_blank" alt="ecommerce1"/> <p className="alo">Landing page de la app Jobs match</p></a>
                   <a target="_blank" href="https://ecommercebryansss1.netlify.app/"><p>Ecommerce 1 landing page</p> <p>Tecnologias:Html5|Css|Javascript</p><img src={ecommercelandingpage1} target="_blank" alt="ecommerce1"/> <p className="alo">Una visualizacion de un ecommerce (tienda virtual)</p></a>
                   <a target="_blank" href="https://spacepageeee.netlify.app"> <p>Space turist</p> <p>Tecnologias:React+vite| Api| Css Boostrap| Javascript| React router |</p> <img src={spacepage} target="_blank" alt="spaceptyect"/> <p className="alo">Pagina dedicada al turismo espacial</p></a>
                   <a target="_blank" href="https://gamepapelbryansss1.netlify.app"><p>PaperRockScissers game</p> <p>Tecnologias:React+vite| Css Sass| Javascript| React redux| React router </p> <img src={papergame} target="_blank" alt="papelgame"/> <p className="alo">El juego de piedra papel y tijera para jugarlo con un amigo en el mismo dispositivo o solo con el bot</p></a>
                   <a target="_blank" href="https://generatorpassword22.netlify.app/"> <p>Generator Password</p> <p>Tecnologias:Html5| Css | Javascript|</p> <img src={passwordgenerator} target="_blank" alt="proyecto3"/> <p className="alo">Generador de claves con determinadas opciones</p></a>
            </article>
            </>)}
            
        </section>
    </main>
    <footer>
        <h3 className="contactos-title">Contactos</h3>
<form className='formnew' action="https://getform.io/f/35c17ea2-a372-4e47-a94b-201b38566f47" method="POST">
<input type="text" name="name" placeholder='Name'/>
<input type="email" name="email" placeholder='email'/>
<textarea type="text" name="message" placeholder='message'/>
<button type="submit">Send</button>
</form>
        <section id="contact" className="seccion-contactos">
            <div className="item-contactos">
                <img src={phoneimg} alt="phone img"/>
                <p>Numero celular</p>
                <small>+584121052569</small>
            </div>

            <div className="item-contactos">
                <img src={mailimg} alt="mail img"/>
                <p>Email</p>
                <small>bryandavidaaa@gmail.com</small>
            </div>

            <a href="/src/cv/bryan cv friendlybot PDF 2023.docx" target="_blank" download="/src/cv/bryan cv friendlybot PDF 2023.docx" className="item-contactos">
                <i className='bx bx-receipt zzz'></i>
                <p>CV</p>
                <small>@Bryan david sanabria azuaje 2022</small>
            </a>
        </section>
    </footer>
    </div>
</div>
  )

}

export default App

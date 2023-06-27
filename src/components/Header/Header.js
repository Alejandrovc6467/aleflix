import { useState } from 'react'
import './Header.css'

const Header = () => {

    const [active, setActive] = useState("dropdown_menu");
    const [iconBt, setIconBt] = useState("fa-solid fa-bars");
 
    const [navbar, setNavbar] = useState("navbar")

    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
          setNavbar("navbar scrollDown")
        } else {
            setNavbar("navbar")
        }
    });

    const navToggle = () => {
        active === "dropdown_menu" ? setActive("dropdown_menu open"): setActive("dropdown_menu")
        active ===  "dropdown_menu" ? setIconBt("fa-solid fa-xmark"): setIconBt("fa-solid fa-bars")
    }


    return <header>

        <div className={navbar} >

            <div className='navbar_izq'>
                <div onClick={navToggle} className="toggle_btn"><i className={iconBt}></i></div>
                <div className="logo"><a href="#"> <img src="img/Logo.png" alt='logo' /></a></div>
            </div>
           
           <div className='navbar_der'>
                <input className='search' type='text' placeholder ="¿Qué estás buscando?"></input>
                <div className="account"><a href="#"><i className="fa-regular fa-circle-user" ></i></a></div>
           </div>
           
           
        </div>

        <div className={active}>
            <li><a href="#">Comedia</a></li>
            <li><a href="#">Accion</a></li>
            <li><a href="#">Aventura</a></li>
            <li><a href="#">Ficcion</a></li>
        </div>

    </header>
}

export default Header
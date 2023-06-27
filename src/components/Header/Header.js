import { useState } from 'react';
import './Header.css';

import image from ".../Assets/doguito.svg"

const Header = () => {

    /* En un proyecto normal (no react) lo haria asi
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen? 'fa-solid fa-xmark':'fa-solid fa-bars'
    }
    */

   const [active, setActive] = useState("dropdown_menu");
   const [iconBt, setIconBt] = useState("fa-solid fa-bars");

   const navToggle = () => {
        active === "dropdown_menu" ? setActive("dropdown_menu open"): setActive("dropdown_menu")
        active ===  "dropdown_menu" ? setIconBt("fa-solid fa-xmark"): setIconBt("fa-solid fa-bars")
   }

    return   <header>

                <div className="navbar">
                    <div className="logo"><a href="#">Alejandro</a></div>
                    <ul className="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a href="#" className="action_btn">Get Started</a>
                    <div onClick={navToggle} className="toggle_btn">
                        <i className={iconBt}></i>
                    </div>
                </div>

                <div className={active}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#" className="action_btn">Get Started</a></li>
                </div>
                <img className="header__logo" src={image} alt="doguito" />
            </header>

}







export default Header




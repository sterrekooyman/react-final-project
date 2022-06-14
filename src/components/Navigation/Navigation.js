import './Navigation.css';

import {NavLink} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";

import MobileNavigation from "../MobileNavigation/MobileNavigation";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

import logo from "../../assets/img/logo/logo-tree.png";

function Navigation() {
    const [open, setOpen] = useState(false);

    window.addEventListener('resize', (event) => {
        console.log(window.innerWidth);
        if (window.innerWidth > 992 ) {
            setOpen(false);
        }
    });

    return (
        <nav className="navigation">
            <div className="container">
                <div className="columns">
                    <div className="col-12 nav-container">
                        <NavLink to="/" exact className="logo-wrapper">
                            <img className="logo" src={logo} alt="logo"/>
                        </NavLink>
                        <div className="desktop-nav">
                            <NavigationLinks/>
                        </div>
                        <AiOutlineMenu
                            className="hamburger"
                            size="3rem"
                            color="black"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                </div>
            </div>
            <MobileNavigation open={open}/>
        </nav>
    );
}

export default Navigation;
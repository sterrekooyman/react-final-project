import './Footer.css';
import facebook from '../../assets/img/icons/facebook.png';
import instagram from '../../assets/img/icons/instagram.png';
import twitter from '../../assets/img/icons/twitter.png';
import {NavLink} from "react-router-dom";

function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="col-12 footer-container">
                        <div className="icons">
                            <img src={facebook} alt="Facebook logo"/>
                            <img src={instagram} alt="Instagram logo"/>
                            <img src={twitter} alt="Twitter logo"/>
                        </div>
                        <div className="links">
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                            <NavLink to="advertisements"  activeClassName="active-link">Advertenties</NavLink>
                            <NavLink to="contact"  activeClassName="active-link">Contact</NavLink>
                            <NavLink to="log-in"  activeClassName="active-link">Inloggen</NavLink>
                            <NavLink to="register"  activeClassName="active-link">Registreren</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
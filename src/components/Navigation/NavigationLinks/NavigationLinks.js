import './NavigationLinks.css';
import {NavLink} from "react-router-dom";

import {motion} from 'framer-motion';

function NavigationLinks(){
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return(
        <nav className="navigation-links">
            <div className="container">
                <div className="columns">
                    <div className="col-12 nav-container">
                        <div className="nav-links">
                            <ul className="nav-menu">

                                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} className="nav-item">
                                    <NavLink to="/" exact activeClassName="nav-link">Home</NavLink>
                                </motion.li>

                                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} className="nav-item">
                                    <NavLink to="advertisements" activeClassName="nav-link">Advertenties</NavLink>
                                </motion.li>

                                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}}  className="nav-item">
                                    <NavLink to="contact" activeClassName="nav-link">Contact</NavLink>
                                </motion.li>

                                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.30}}  className="nav-item">
                                    <NavLink to="log-in" activeClassName="nav-link">Inloggen</NavLink>
                                </motion.li>

                                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.40}}  className="nav-item">
                                    <NavLink to="register" activeClassName="nav-link">Registreren</NavLink>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default NavigationLinks;
import NavigationLinks from "../NavigationLinks/NavigationLinks";

import './Footer.css';

import facebook from '../../assets/img/icons/facebook.png';
import instagram from '../../assets/img/icons/instagram.png';
import twitter from '../../assets/img/icons/twitter.png';

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
                            <NavigationLinks/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
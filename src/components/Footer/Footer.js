import NavigationLinks from "../NavigationLinks/NavigationLinks";

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="col-12 footer-container">
                        <div className="icon-wrapper">
                            <div className="copyright">
                                <p>© HondAdoptie Eindproject</p>
                            </div>
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
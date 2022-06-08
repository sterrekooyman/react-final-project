import './Navigation.css';

import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
// import logo from "../../assets/img/logo/Viervoeter.png";

function Navigation() {

    return (
        <nav className="navigation">
            <div className="container">
                <div className="columns">
                    <div className="col-12 nav-container">
                        <div className="nav-bar">
                            <HamburgerIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;

// <img src={logo} alt="logo"/>
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import './MobileNavigation.css';

function MobileNavigation({open}) {

    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
            <div className="container">
                <div className="columns">
                    <div className="col-12">
                        <div className="nav-menu">
                            <NavigationLinks/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNavigation;
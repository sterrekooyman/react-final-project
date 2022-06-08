import './HamburgerIcon.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState} from 'react';
import NavigationLinks from "../NavigationLinks/NavigationLinks";

function HamburgerIcon() {
    const [open, setOpen] = useState(false);

    return(

            <div className="hamburger-icon">
                <div className="container">
                    <div className="columns">
                        <div className="col-12 hamburger-container">
                            <div className="hamburger-column">
                                <AiOutlineMenu
                                    className="hamburger"
                                    size="3rem"
                                    color="black"
                                    onClick={() => setOpen(!open)}
                                />
                            </div>
                            {open && <NavigationLinks/>}
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default HamburgerIcon;
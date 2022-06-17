import {NavLink} from "react-router-dom";
import {useAuth} from "../../Contexts/AuthContext";

function NavigationLinks() {
    const {user, logOut} = useAuth();

    return (
        <>
            <NavLink to="/honden">Honden</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {
                user ?
                    <>
                        <NavLink to="/plaats-advertentie">Plaats advertentie</NavLink>
                        <NavLink onClick={logOut} to="/">Uitloggen</NavLink>
                    </>
                    : <>
                        <NavLink to="/log-in">Inloggen</NavLink>
                        <NavLink to="/registreer">Registreren</NavLink>
                    </>
            }
        </>
    )
}

export default NavigationLinks;
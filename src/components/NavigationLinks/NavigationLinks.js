import {NavLink} from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function NavigationLinks() {
    const { user, logOut } = useAuth();

    return (
        <>
            <NavLink to="/honden" activeClassName="active">Honden</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            {
                user ?
                    <>
                    <NavLink to="/plaats-advertentie" activeClassName="active">Plaats advertentie</NavLink>
                    <NavLink onClick={logOut} to="/" activeClassName="active">Uitloggen</NavLink>
                    </>
                    : <>
                        <NavLink to="/log-in" activeClassName="active">Inloggen</NavLink>
                        <NavLink to="/registreer" activeClassName="active">Registreren</NavLink>
                    </>
            }
        </>
    )
}

export default NavigationLinks;
import {Outlet, Navigate} from 'react-router-dom';
import {useAuth} from "../../Contexts/AuthContext";

function PrivateRoute() {
    const {user} = useAuth();
    return (
        user ? <Outlet/> : <Navigate to="/log-in"/>
    );
}

export default PrivateRoute;
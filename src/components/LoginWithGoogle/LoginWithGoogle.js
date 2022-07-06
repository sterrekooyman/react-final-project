import {useAuth} from "../../Contexts/AuthContext";
import './LoginWithGoogle.css';
import {useNavigate} from "react-router-dom";

function LoginWithGoogle() {
    let navigate = useNavigate();

    const {googleSignIn} = useAuth();

    /* Logging in when firing this function on the onClick on form, using Firebase */
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="login-with-google">
            <div className="container">
                <div className="columns">
                    <div className="column col-12 shadow">
                        <p>Log in with Google</p>
                        <button className="button button-primary" onClick={handleGoogleSignIn}>Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWithGoogle;
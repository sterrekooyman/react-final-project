import {useAuth} from "../../Contexts/AuthContext";
import './LoginWithGoogle.css';

function LoginWithGoogle() {

    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error.message);
        }
    };

    return(
        <div className="login-with-google">
            <div className="container">
                <div className="columns">
                    <div className="column col-12 shadow">
                            <p>Log in with Google</p>
                            <button className="button button-primary" onClick={handleGoogleSignIn}>Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWithGoogle;
import './../components/LoginForm/LoginForm.css';

import Navigation from "../././components/Navigation/Navigation";
import LoginForm from '../components/LoginForm/LoginForm';
import LoginWithGoogle from "../components/LoginWithGoogle/LoginWithGoogle";
import RedirectArea from "../components/RedirectArea/RedirectArea";
import Footer from ".././components/Footer/Footer";

function LoginPage() {
    return (
        <>
            <Navigation/>
            <section className="login">
                <div className="container">
                    <div className="columns">
                        <div className="form col-6 col-xl-7 col-lg-9 col-md-12">
                            <LoginForm/>
                            <LoginWithGoogle/>
                            <RedirectArea
                                text="Nog geen account? Registreer hier!"
                                buttonText="Registreren"
                                buttonUrl="/register"
                                buttonVariation="secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default LoginPage;
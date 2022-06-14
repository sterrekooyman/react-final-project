import Navigation from "../././components/Navigation/Navigation";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import RedirectArea from "../components/RedirectArea/RedirectArea";
import Footer from ".././components/Footer/Footer";

import './../components/RegisterForm/RegisterForm.css';

function Register() {
    return (
        <>
            <Navigation/>

            <section className="register">
                <div className="container">
                    <div className="columns">
                        <div className="form col-6 col-xl-7 col-lg-9 col-md-12">
                            <RegisterForm/>
                            <RedirectArea
                                text="Heb je al een account? Log hier in!"
                                buttonText="Log in"
                                buttonUrl="/log-in"
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

export default Register;
import Navigation from "../././components/Navigation/Navigation";
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from ".././components/Footer/Footer";

import './../components/ContactForm/ContactForm.css';

function ContactPage() {
    return (
        <>
            <Navigation/>

            <section className="contact">
                <div className="container">
                    <div className="columns">
                        <div className="form col-6 col-xl-7 col-lg-9 col-md-12">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default ContactPage;
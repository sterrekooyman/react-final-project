import Navigation from "../././components/Navigation/Navigation";
import AdoptionForm from '../components/AdoptionForm/AdoptionForm';
import Footer from ".././components/Footer/Footer";

import './../components/ContactForm/ContactForm.css';

function AdoptionPage() {
    return (
        <>
            <Navigation/>

            <section className="adoption">
                <div className="container">
                    <div className="columns">
                        <div className="form col-8 col-xl-7 col-lg-9 col-md-12">
                            <AdoptionForm/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default AdoptionPage;
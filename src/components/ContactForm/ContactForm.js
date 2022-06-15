import {useForm} from 'react-hook-form';

import {addDoc, collection} from "firebase/firestore";

import {db} from '../../firebase-config';

import './ContactForm.css';

function ContactForm() {
    const contactFormCollectionRef = collection(db, 'contactforms');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const createContactForm = async (data) => {
        try {
            await addDoc(contactFormCollectionRef, data);
            document.getElementById('contactform').reset();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form id="contactform" onSubmit={handleSubmit(createContactForm)} className="shadow">
            <legend>Contact</legend>

            <label htmlFor="name">
                Naam
                <input
                    type="text"
                    {...register("name", {
                        required: "Dit veld is verplicht"
                    })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </label>

            <label htmlFor="email">
                Emailadres
                <input
                    type="email"
                    {...register("email", {
                        required: "Dit veld is verplicht"
                    })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </label>

            <label htmlFor="message">
                Bericht
                <textarea
                    {...register("message", {
                        required: "Dit veld is verplicht"
                    })}
                    type="text"
                >
            </textarea>
                {errors.message && <p className="error">{errors.message.message}</p>}
            </label>
            <button className="button button-primary" type="submit">Verstuur</button>
        </form>

    );
}

export default ContactForm;
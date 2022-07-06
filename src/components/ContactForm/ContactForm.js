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

    /* Send data from contact form to Firebase with firing this function on onSubmit/handleSubmit. */

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
                        required: "Dit veld is verplicht",
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
                        required: "Dit veld is verplicht",
                        minLength: {
                            value: 10,
                            message: "Bericht moet minimaal 10 karakters bevatten"
                        }
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
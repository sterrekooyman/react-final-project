import {useForm} from 'react-hook-form';
import './ContactForm.css';

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow">
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
                {errors.email && <p className="error" >{errors.email.message}</p>}
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
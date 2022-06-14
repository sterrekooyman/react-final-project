import {useForm} from 'react-hook-form';
import './AdoptionForm.css';

function AdoptionForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="adopt shadow">
            <legend>Adoptieformulier</legend>

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

             <label htmlFor="phone-number">
                 <p>Telefoonnummer</p>
                 <input
                     type="phone"
                     {...register("phone", {
                         required: "Dit veld is verplicht"
                     })}
                 />
                 {errors.phone && <p className="error">{errors.phone.message}</p>}
             </label>

            <label htmlFor="message">
                Korte beschrijving
                <textarea
                    {...register("message", {
                        required: "Dit veld is verplicht"
                    })}
                    type="text"
                    placeholder="Beschrijf je woonsituatie, de motivatie achter de adoptie en geef een korte beschrijving betreft wie jij bent. "
                >
            </textarea>
                {errors.message && <p className="error">{errors.message.message}</p>}
            </label>
            <button className="button button-primary" type="submit">Verstuur</button>
            <a href="/advertisement">Terug naar de advertentie</a>
        </form>

    );
}

export default AdoptionForm;

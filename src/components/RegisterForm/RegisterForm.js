import {useState} from "react";
import {useForm} from 'react-hook-form';

import './RegisterForm.css';

import { useAuth } from "../../Contexts/AuthContext";

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [errorMessage, setErrorMessage] = useState(null)

    const { signUp } = useAuth();

    const onSubmit = async (data) => {
        try {
            await signUp(data.email, data.password);
        } catch (err) {
            if (err.code == "auth/email-already-in-use") {
                setErrorMessage("The email address is already in use");
            } else if (err.code == "auth/invalid-email") {
                setErrorMessage("The email address is not valid.");
            } else if (err.code == "auth/operation-not-allowed") {
                setErrorMessage("Operation not allowed.");
            } else if (err.code == "auth/weak-password") {
                setErrorMessage("The password is too weak.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow">
            <legend>Registreren</legend>
            {errorMessage && <p className="error" >{errorMessage}</p>}

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

            <label htmlFor="password">
                Wachtwoord
                <input
                    {...register("password", {
                        required: "Dit veld is verplicht"
                    })}
                    type="password"
                >
                </input>
                {errors.password && <p className="error">{errors.password.message}</p>}
            </label>

            <label htmlFor="passwordCheck">
                Herhaal wachtwoord
                <input
                    {...register("password", {
                        required: "Dit veld is verplicht"
                    })}
                    type="password"
                >
                </input>
                {errors.password && <p className="error">{errors.password.message}</p>}
            </label>

            <button className="button button-primary" type="submit">Registreren</button>
        </form>

    );
}

export default RegisterForm;
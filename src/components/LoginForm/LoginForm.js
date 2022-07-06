import {useState} from "react";
import {useForm} from 'react-hook-form';
import {useAuth} from "../../Contexts/AuthContext";

/* Logging in using Authentication from Firebase */

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [errorMessage, setErrorMessage] = useState(null)

    const {logIn} = useAuth();

    const onSubmit = async (data) => {
        try {
            await logIn(data.email, data.password);
        } catch (err) {
            console.log(err.code);
            if (err.code === "auth/wrong-password") {
                setErrorMessage("Het wachtwoord is onjuist");
            } else if (err.code === "auth/invalid-email") {
                setErrorMessage("Het emailadres is onjuist");
            } else if (err.code === "auth/weak-password") {
                setErrorMessage("Het wachtwoord is te zwak");
            } else {
                setErrorMessage(err.message);
            }
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow">
            <legend>Log in</legend>
            {errorMessage && <p className="server-err">{errorMessage}</p>}

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
            <button className="button button-primary" type="submit">Login</button>
            <a href="/contact">Wachtwoord vergeten?</a>
        </form>

    );
}

export default LoginForm;
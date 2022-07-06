import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {addDoc, collection} from 'firebase/firestore';

import {db} from '../../firebase-config';

import './Adoptionform.css';

function AdoptionForm({dogId}) {
    const adoptionFormCollectionRef = collection(db, "adoptionforms");
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();


    /* Send data to firebase, firing this function on the onSubmit/handleSubmit. If successful, redirect to /honden. */
    const createAdoptionForm = async (data) => {
        try {
            await addDoc(adoptionFormCollectionRef, data);
            document.getElementById('adoption-form').reset();
            navigate('/honden');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <article id="adoptionform" className="adoptionform">
            <div className="container ">
                <div className="columns">
                    <div className="column col-12">
                        <div className="content shadow">
                            <form id="adoption-form" onSubmit={handleSubmit(createAdoptionForm)}
                                  className="adopt shadow">
                                <legend>Adoptieformulier</legend>

                                <input
                                    type="hidden"
                                    value={dogId}
                                    {...register("dogId")}
                                />

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
                                    Geef een korte beschrijving over jezelf
                                    <textarea
                                        {...register("message", {
                                            required: "Dit veld is verplicht",
                                            minLength: {
                                                value: 100,
                                                message: "Om een goede match te kunnen maken hebben we een uitgebreidere beschrijving van je nodig"
                                            },
                                        })}
                                        type="text"
                                        placeholder="Beschrijf je woonsituatie, de motivatie achter de adoptie en geef een korte beschrijving betreft wie jij bent. "
                                    />
                                    {errors.message && <p className="error">{errors.message.message}</p>}
                                </label>
                                <button className="button button-primary" type="submit">Verstuur</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </article>

    );
}

export default AdoptionForm;

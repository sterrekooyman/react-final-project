import './PlaceAdvertisement.css';

import { useState } from 'react';
import {useForm} from "react-hook-form";

import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

import { storage } from '../../firebase-config';
import { db } from '../../firebase-config';

function PlaceAdvertisement() {
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm();

    const [imageUpload, setImageUpload] = useState(null);

    const uploadImage = () => {
        if(imageUpload == null) return;

        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image uploaded!");
        })
    };

    const advertisementCollectionRef = collection(db, "advertisements");


    const createAdvertisement = async (data) => {
        try {
            await addDoc(advertisementCollectionRef,
                data.name,
                data.age,
                data.gender,
                data.chipped,
                data.size,
                data.sterilized,
                data.compatibleCats,
                data.compatibleDogs,
                data.compatibleChildren,
                data.description);
        } catch(error) {
            console.log(error);
        }
    };

    return (

    <form onSubmit={handleSubmit(createAdvertisement)} className="shadow">
        <legend>Advertentie plaatsen</legend>

        <label htmlFor="image">
            Upload hier een foto van de hond
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0])}}
            />
            <button onClick={uploadImage}>Upload</button>
        </label>

        <label htmlFor="name">
            Wat is de naam van de hond?
            <input
                type="text"
                {...register("name", {
                    required: "Dit veld is verplicht"
                })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
        </label>

        <label htmlFor="age">
            Wat is de leeftijd van de hond?
            <input
                type="number"
                {...register("age", {
                    required: "Dit veld is verplicht"
                })}
            />
            {errors.age && <p className="error">{errors.age.message}</p>}
        </label>

        <div className="select-container">
            <label htmlFor="size">
                Wat is de grootte van de hond?
                <select {...register("size", {
                    required: "Dit veld is verplicht"
                })}>
                    <option value="select">Selecteer</option>
                    <option value="small">Klein</option>
                    <option value="medium">Middel</option>
                    <option value="large">Groot</option>
                </select>
                {errors.size && <p className="error">{errors.size.message}</p>}
            </label>

            <label htmlFor="chipped">
                Is hij/zij gechipt?
                <select {...register("chipped", {
                    required: "Dit veld is verplicht"
                })}>
                    <option value="select">Selecteer</option>
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                </select>
                {errors.chipped && <p className="error">{errors.chipped.message}</p>}
            </label>

            <label htmlFor="sterilized">
                Is hij/zij gesteriliseerd?
                <select {...register("sterilised", {
                    required: "Dit veld is verplicht"
                })}>
                    <option value="select">Selecteer</option>
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                </select>
                {errors.sterilized && <p className="error">{errors.sterilized.message}</p>}
            </label>
        </div>

        <div className="select-container">
            <label htmlFor="compatibleCats">
                Kan hij/zij met katten?
                <select {...register("compatibleCats", {
                    required: "Dit veld is verplicht"
                })}>
                    <option value="select">Selecteer</option>
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                </select>
                {errors.compatibleCats &&
                    <p className="error">{errors.compatibleCats.message}</p>}
            </label>

            <label htmlFor="compatibleDogs">
                Kan hij/zij met honden?
                <select {...register("compatibleCats", {
                    required: "Dit veld is verplicht"
                })}>
                    <option value="select">Selecteer</option>
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                </select>
                {errors.compatibleDogs &&
                    <p className="error">{errors.compatibleDogs.message}</p>}
            </label>

            <label htmlFor="compatibleChildren">
                Kan hij/zij met kinderen?
                <select {...register("compatibleChildren", {
                    required: "Dit veld is verplicht"
                })}>
                    <option value="select">Selecteer</option>
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                </select>
                {errors.compatibleChildren &&
                    <p className="error">{errors.compatibleChildren.message}</p>}
            </label>
        </div>

        <label htmlFor="description">
            Geef hier een beschrijving van de hond:
            <textarea
                {...register("description", {
                    required: "Dit veld is verplicht"
                })}
                type="text"
            />
            {errors.description && <p className="error">{errors.description.message}</p>}
        </label>

        <button className="button button-primary" type="submit">Plaats advertentie</button>
    </form>
    );
}

export default PlaceAdvertisement;
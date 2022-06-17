import './PlaceAdvertisement.css';

import {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';

import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {ref, uploadBytes} from 'firebase/storage';

import {v4} from 'uuid';

import {storage} from '../../firebase-config';
import {db} from '../../firebase-config';

function PlaceAdvertisement() {
    const advertisementCollectionRef = collection(db, "advertisements");
    const [imageUpload, setImageUpload] = useState(null);
    let navigate = useNavigate();

    const {
        handleSubmit,
        register,
        watch,
        setError,
        clearErrors,
        formState: {errors}
    } = useForm();

    // On file input change - set state for imageUpload
    useEffect(() => {
        const imageWatch = watch('image');
        // Check if file is present - if not, return.
        if (imageWatch.length === 0) {
            return
        }
        // Set state with image object from input
        setImageUpload(imageWatch[0])
    });

    // Step 1: Upload image
    // Data prop is used for the createAdvertisement function
    const uploadImage = async (data) => {
        if (imageUpload == null) return;

        const imagePath = `images/${imageUpload.name + v4()}`;
        const imageRef = ref(storage, imagePath);

        await uploadBytes(imageRef, imageUpload);

        createAdvertisement(imagePath, data);
    };

    // Step 2: Upload tekst and image reference
    const createAdvertisement = async (imagePath, data) => {
        // Overwrite 'file' object with reference to image previously uploaded
        data.image = imagePath;
        data = {...data, createdAt: serverTimestamp(), adoptionStatus: false}

        await addDoc(advertisementCollectionRef, data);

        // Reset form on success
        document.getElementById('place-advertisement').reset();
        navigate('/honden');
    };

    const validateImageFormat = (imageObject) => {
        const imageFormatRegex = /\.?(gif|jpe?g|tiff?|png|webp)$/i;
        if (imageFormatRegex.test(imageObject.type)) {
            clearErrors('image');
        } else {
            setError('image', {
                type: 'custom',
                message: 'Bestandsextensie onjuist, gebruik JPG/PNG/TIFF/GIF'
            });
        }
    }

    return (
        <>
            <form id="place-advertisement" onSubmit={handleSubmit(uploadImage)} className="shadow">
                <legend>Advertentie plaatsen</legend>

                <label htmlFor="image">
                    Upload hier een foto van de hond
                    <input
                        type="file"
                        {...register("image", {
                            onChange: (e) => validateImageFormat(e.nativeEvent.srcElement.files[0]),
                            required: "Dit veld is verplicht"
                        })}
                    />
                    {errors.image && <p className="error">{errors.image.message}</p>}
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
                            required: "Dit veld is verplicht",
                            min: 0,
                            max: 20,
                        })}
                    />
                    {errors.age && <p className="error">{errors.age.message}</p>}
                </label>

                <label htmlFor="gender">
                    Is het een teefje of een reutje?
                    <select defaultValue={""} {...register("gender", {
                        required: "Dit veld is verplicht"
                    })}>
                        <option value="" disabled>Selecteer</option>
                        <option value="Teefje">Teefje</option>
                        <option value="Reutje">Reutje</option>
                    </select>
                    {errors.gender && <p className="error">{errors.gender.message}</p>}
                </label>

                <label htmlFor="size">
                    Wat is de grootte van de hond?
                    <select defaultValue={""} {...register("size", {
                        required: "Dit veld is verplicht"
                    })}>
                        <option value="" disabled>Selecteer</option>
                        <option value="Klein">Klein</option>
                        <option value="Middel">Middel</option>
                        <option value="Groot">Groot</option>
                    </select>
                    {errors.size && <p className="error">{errors.size.message}</p>}
                </label>

                <label htmlFor="chipped">
                    Is hij/zij gechipt?
                    <select defaultValue={""} {...register("chipped", {
                        required: "Dit veld is verplicht"
                    })}>
                        <option value="" disabled>Selecteer</option>
                        <option value="Ja">Ja</option>
                        <option value="Nee">Nee</option>
                    </select>
                    {errors.chipped && <p className="error">{errors.chipped.message}</p>}
                </label>

                <label htmlFor="compatibleCats">
                    Kan hij/zij met katten?
                    <select defaultValue={""} {...register("compatibleCats", {
                        required: "Dit veld is verplicht"
                    })}>
                        <option value="" disabled>Selecteer</option>
                        <option value="Ja">Ja</option>
                        <option value="Nee">Nee</option>
                    </select>
                    {errors.compatibleCats &&
                        <p className="error">{errors.compatibleCats.message}</p>}
                </label>

                <label htmlFor="compatibleDogs">
                    Kan hij/zij met honden?
                    <select defaultValue={""} {...register("compatibleDogs", {
                        required: "Dit veld is verplicht"
                    })}>
                        <option value="" disabled>Selecteer</option>
                        <option value="Ja">Ja</option>
                        <option value="Nee">Nee</option>
                    </select>
                    {errors.compatibleDogs &&
                        <p className="error">{errors.compatibleDogs.message}</p>}
                </label>

                <label htmlFor="compatibleChildren">
                    Kan hij/zij met kinderen?
                    <select defaultValue={""} {...register("compatibleChildren", {
                        required: "Dit veld is verplicht"
                    })}>
                        <option value="" disabled>Selecteer</option>
                        <option value="Ja">Ja</option>
                        <option value="Nee">Nee</option>
                    </select>
                    {errors.compatibleChildren &&
                        <p className="error">{errors.compatibleChildren.message}</p>}
                </label>

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
        </>
    );
}

export default PlaceAdvertisement;
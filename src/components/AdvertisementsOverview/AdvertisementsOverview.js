import {Button} from "../Button/Button";
import './AdvertisementsOverview.css';

import {getDownloadURL, ref} from "firebase/storage";
import {storage} from '../../firebase-config';
import {useEffect, useState} from "react";

export function AdvertisementsWrapper({children}) {
    return (
        <section className="advertisements">
            <div className="container">
                <div className="columns">
                    {children}
                </div>
            </div>
        </section>
    );
}

export function AdvertisementsOverview({image, dogName, age, gender, id}) {

    const [dogImage, setDogImage] = useState(null);

    // Get Firebase img url
    useEffect(() => {
        getDownloadURL(ref(storage, image)).then((url) => {
            setDogImage(url);
        })
    }, []);

    return (
        <div className="col-4 col-lg-6 col-md-9 col-sm-9">
            <div className="advertisements-card shadow">
                <div className="image-wrapper">
                    <img src={dogImage} alt={dogName}/>
                </div>
                <div className="content">
                    <h2>{dogName}</h2>
                    <div className="specifics">
                        <table>
                            <tbody>
                            <tr>
                                <td>Leeftijd:</td>
                                <td>{age} jaar</td>
                            </tr>
                            <tr>
                                <td>Geslacht:</td>
                                <td>{gender}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Button url={`/honden/${id}`} variation="secondary" size="small">Meer informatie</Button>
                </div>
            </div>
        </div>
    );
}

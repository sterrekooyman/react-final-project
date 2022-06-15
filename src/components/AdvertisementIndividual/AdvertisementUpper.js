import './AdvertisementUpper.css';
import {HashLink} from "react-router-hash-link";

function AdvertisementUpper({
                                image,
                                name,
                                description,
                                subtext,
                                age,
                                gender,
                                size,
                                chipped,
                                compatibleCats,
                                compatibleChildren,
                                compatibleDogs
                            }) {


    return (
        <article className="advertisement-upper">
            <div className="container">
                <div className="columns shadow">
                    <div className="column col-6 col-md-12 col-sm-12">
                        <div className="image-wrapper">
                            <img src={image} alt={name}/>
                        </div>
                    </div>
                    <div className="column col-6 col-md-12 col-sm-12">
                        <div className="description">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <p className="list">{subtext}</p>
                            <table>
                                <tr>
                                    <td>Leeftijd:</td>
                                    <td>{age} jaar</td>
                                </tr>
                                <tr>
                                    <td>Geslacht:</td>
                                    <td>{gender}</td>
                                </tr>
                                <tr>
                                    <td>Grootte</td>
                                    <td>{size}</td>
                                </tr>
                                <tr>
                                    <td>Gechipt</td>
                                    <td>{chipped}</td>
                                </tr>
                                <tr>
                                    <td>Kan samen met katten:</td>
                                    <td>{compatibleCats}</td>
                                </tr>
                                <tr>
                                    <td>Kan samen met kinderen:</td>
                                    <td>{compatibleChildren}</td>
                                </tr>
                                <tr>
                                    <td>Kan samen met honden:</td>
                                    <td>{compatibleDogs}</td>
                                </tr>
                            </table>
                            <HashLink className="button button-primary" to="#adoptionform">Adopteer mij</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AdvertisementUpper;
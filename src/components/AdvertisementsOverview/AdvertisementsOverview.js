import {Button} from "../Button/Button";
import './AdvertisementsOverview.css';

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

export function AdvertisementsOverview({image, dogName, age, gender}) {

    return (
        <div className="col-4 col-lg-6 col-md-9 col-sm-9">
            <div className="advertisements-card shadow">
                <div className="image-wrapper">
                    <img src={image} alt={dogName}/>
                </div>
                <div className="content">
                    <h2>{dogName}</h2>
                    <div className="specifics">
                        <table>
                            <tr>
                                <td>Leeftijd:</td>
                                <td>{age} jaar</td>
                            </tr>
                            <tr>
                                <td>Geslacht:</td>
                                <td>{gender}</td>
                            </tr>
                        </table>
                    </div>
                    <Button url="/honden/" variation="secondary" size="small">Meer informatie</Button>
                </div>
            </div>
        </div>
    );
}

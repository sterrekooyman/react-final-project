import './OverviewAdvertisements.css';
import {Button} from "../Button/Button";

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

export function OverviewAdvertisements({image, title, headline, age, gender, ageSpecific, genderSpecific}) {

    return (

        <div className="col-xl-4 col-lg-6 col-md-9 col-sm-9">
            <div className="advertisements-box shadow">
                <img src={image} alt={title}/>
                <div className="advertisements-content">
                    <div className="advertisements-headline"><h2>{headline}</h2></div>
                    <div className="advertisements-specifics">
                    <p>{age}{ageSpecific}</p>
                    <p>{gender}{genderSpecific}</p>
                    </div>
                    <Button url="/advertisement" variation="advertisements">Meer
                        informatie</Button>
                </div>
            </div>
        </div>
    );
}

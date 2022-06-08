import Navigation from "../components/Navigation/Navigation";
import AdvertisementUpper from "../components/IndividualAdvertisement/AdvertisementUpper";
import AdvertisementLower from "../components/IndividualAdvertisement/AdvertisementLower";
import RedirectArea from "../components/RedirectArea/RedirectArea";
import Footer from "../components/Footer/Footer";

import nanoek from '../assets/img/dogs/nanoek-big.png';

function IndividualAdvertisementPage() {
    return (
        <>

            <Navigation/>

            <AdvertisementUpper
                image={nanoek}
                title="Dog Nanoek"
                name="Nanoek"
                textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
                Aliquam erat volutpat. Donec at pellentesque est."
                subtext="Leeftijd:
                         Geslacht:
                         Grootte:
                         Gechipt:
                         Gesteriliseerd:
                         Speciale zorg:
                         Kan samen met katten:
                         Kan samen met kinderen:
                         Kan samen met honden:"
                />

            <AdvertisementLower
                headlineOne="Wat moet je over mij weten?"
                dogInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
            Aliquam erat volutpat. Donec at pellentesque est. Vestibulum volutpat accumsan molestie.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
            Aliquam erat volutpat. Donec at pellentesque est."
                headlineTwo="Jij bent.."
                userInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
                Aliquam erat volutpat."
                headlineThree="Het adoptieproces"
                adoptionProces="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
                Aliquam erat volutpat. Donec at pellentesque est. Vestibulum volutpat accumsan molestie.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem. "
                headlineFour="Het adoptietarief"
                adoptionFinancials="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vitae iaculis tortor, vel lacinia lorem. Aliquam erat volutpat."
            />

            <RedirectArea
                text="Vul hier het adoptieformulier in"
            />

            <Footer/>

        </>
    );
}

export default IndividualAdvertisementPage;
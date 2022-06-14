import Navigation from "../components/Navigation/Navigation";
import AdvertisementUpper from "../components/AdvertisementIndividual/AdvertisementUpper";
import AdvertisementLower from "../components/AdvertisementIndividual/AdvertisementLower";
import RedirectArea from "../components/RedirectArea/RedirectArea";
import Footer from "../components/Footer/Footer";

import nanoek from '../assets/img/dogs/nanoek-big.png';

function IndividualAdvertisementPage() {
    return (
        <>

            <Navigation/>

            <AdvertisementUpper
                image={nanoek}
                name="Nanoek"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
                Aliquam erat volutpat. Donec at pellentesque est."

                age="4"
                gender="Teefje"
                size="Medium"
                chipped="Ja"
                sterilized="Ja"
                compatibleCats="Nee"
                compatibleChildren="Ja"
                compatibleDogs="Ja"
                />

            <AdvertisementLower
                dogInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
            Aliquam erat volutpat. Donec at pellentesque est. Vestibulum volutpat accumsan molestie.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem.
            Aliquam erat volutpat. Donec at pellentesque est."
            />

            <RedirectArea
                text="Vul hier het adoptieformulier in!"
                buttonText="Adopteer"
                buttonUrl="/adopt"
                buttonVariation="primary"
            />

            <Footer/>

        </>
    );
}

export default IndividualAdvertisementPage;
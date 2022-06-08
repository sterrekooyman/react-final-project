import '../css/reset.css';
import '../css/grid.css';
import '../css/typography.css';
import '../css/test.css';
import '../css/base.css';

import Navigation from "../././components/Navigation/Navigation";
import Footer from "../././components/Footer/Footer";
import {OverviewAdvertisements, AdvertisementsWrapper } from "../components/OverviewAdvertisements/OverviewAdvertisements";

import murph from '../assets/img/dogs/murph.png';

function OverviewAdvertisementsPage() {
    return (
        <>

            <Navigation/>

            <AdvertisementsWrapper>

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

                <OverviewAdvertisements
                    image={murph}
                    title="Dog Murph"
                    headline="Murph"
                    age="Leeftijd:"
                    gender="Geslacht:"
                    ageSpecific="4 jaar"
                    genderSpecific="Teef"
                />

            </AdvertisementsWrapper>

            <Footer/>
        </>
    );
}

export default OverviewAdvertisementsPage;
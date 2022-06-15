import {useEffect, useState} from "react";
import {collection, getDocs} from 'firebase/firestore';

import Navigation from "../././components/Navigation/Navigation";
import {
    AdvertisementsOverview,
    AdvertisementsWrapper
} from "../components/AdvertisementsOverview/AdvertisementsOverview";
import Footer from "../././components/Footer/Footer";

import {db} from "../firebase-config";

import '../css/reset.css';
import '../css/grid.css';
import '../css/typography.css';
import '../css/base.css';

function OverviewAdvertisementsPage() {
    const [advertisementsList, setAdvertisementsList] = useState([]);
    const advertisementsCollectionRef = collection(db, "advertisements");

    useEffect(() => {
        const getAdvertisements = async () => {
            const data = await getDocs(advertisementsCollectionRef);
            setAdvertisementsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getAdvertisements();
    }, []);

    return (
        <>
            <Navigation/>

            <AdvertisementsWrapper>

                {advertisementsList.sort((b, a) =>
                    a.createdAt - b.createdAt
                ).map((advertisement) => (
                    <AdvertisementsOverview
                        key={advertisement.createdAt}
                        id={advertisement.id}
                        image={advertisement.image}
                        dogName={advertisement.name}
                        age={advertisement.age}
                        gender={advertisement.gender}
                    />
                ))}

            </AdvertisementsWrapper>

            <Footer/>
        </>

    );
}


export default OverviewAdvertisementsPage;
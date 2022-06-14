import {useEffect, useState} from "react";
import {collection, getDocs } from 'firebase/firestore';

import Navigation from "../././components/Navigation/Navigation";
import {AdvertisementsOverview, AdvertisementsWrapper } from "../components/AdvertisementsOverview/AdvertisementsOverview";
import Footer from "../././components/Footer/Footer";

import {db} from "../firebase-config";

import murph from '../assets/img/dogs/murph.png';

import '../css/reset.css';
import '../css/grid.css';
import '../css/typography.css';
import '../css/base.css';

function OverviewAdvertisementsPage() {
    const [advertisementList, setAdvertisementList] = useState([]);
    const advertisementCollectionRef = collection(db, "advertisements");

    useEffect(() => {
        const getAdvertisements = async() => {
            const data = await getDocs( advertisementCollectionRef);
            setAdvertisementList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));

        };
        getAdvertisements();
    })

        return (
            <>
                <Navigation/>

                <AdvertisementsWrapper>

                    <AdvertisementsOverview
                        image={murph}
                        dogName="Murph"
                        age="4"
                        gender="Teefje"
                    />

                </AdvertisementsWrapper>

                <Footer/>
            </>

        );
    }



export default OverviewAdvertisementsPage;
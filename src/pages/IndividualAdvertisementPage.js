import Navigation from "../components/Navigation/Navigation";
import AdvertisementUpper from "../components/AdvertisementIndividual/AdvertisementUpper";
import AdvertisementLower from "../components/AdvertisementIndividual/AdvertisementLower";
import Footer from "../components/Footer/Footer";

import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {doc, onSnapshot} from "firebase/firestore";
import {db, storage} from "../firebase-config";
import {getDownloadURL, ref} from "firebase/storage";
import AdoptionForm from "../components/AdoptionForm/AdoptionForm";
import {useAuth} from "../Contexts/AuthContext";
import RedirectArea from "../components/RedirectArea/RedirectArea";

function IndividualAdvertisementPage() {
    const {dogId} = useParams();
    const [advertisementData, setAdvertisementData] = useState([]);
    const id = dogId;
    const docRef = doc(db, 'advertisements', id)
    const [dogImage, setDogImage] = useState(null);
    const {user} = useAuth();

    useEffect(() => {
        onSnapshot(docRef, (doc) => {
            setAdvertisementData(doc.data(), doc.id);
        });
    }, [docRef]);

    useEffect(() => {
        if (advertisementData.length !== 0) {
            getDownloadURL(ref(storage, advertisementData.image)).then((url) => {
                setDogImage(url);
            })
        }
    }, [advertisementData]);

    return (
        <>
            <Navigation/>

            <AdvertisementUpper
                image={dogImage}
                name={advertisementData.name}
                description={advertisementData.description}

                age={advertisementData.age}
                gender={advertisementData.gender}
                size={advertisementData.size}
                chipped={advertisementData.chipped}
                sterilized={advertisementData.sterilized}
                compatibleCats={advertisementData.compatibleCats}
                compatibleChildren={advertisementData.compatibleChildren}
                compatibleDogs={advertisementData.compatibleDogs}
            />
            <AdvertisementLower
                dogInformation={advertisementData.description}
            />

            {/* Only show form when logged in, else show login redirect */}
            {user ? <AdoptionForm dogId={dogId}/> : <RedirectArea
                text="Log in om het adoptieformulier in te vullen!"
                buttonText="Inloggen"
                buttonUrl="/log-in"
                buttonVariation="secondary"
            />}

            <Footer/>
        </>
    );
}

export default IndividualAdvertisementPage;
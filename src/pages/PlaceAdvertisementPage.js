import Navigation from "../components/Navigation/Navigation";
import PlaceAdvertisement from "../components/PlaceAdvertisement/PlaceAdvertisement";
import Footer from "../components/Footer/Footer";

function PlaceAdvertisementPage() {
    return (
        <>
            <Navigation/>

            <div className="place-advertisement">
                <div className="container">
                    <div className="columns">
                        <div className="column col-12">
                            <div className="content shadow">
                                <PlaceAdvertisement/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default PlaceAdvertisementPage;
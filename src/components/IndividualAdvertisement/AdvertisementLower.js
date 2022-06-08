import './AdvertisementLower.css';

function AdvertisementLower({headlineOne, dogInformation,headlineTwo, userInformation, headlineThree, adoptionProces, headlineFour, adoptionFinancials}){
    return(
        <article className="advertisement-big">
            <div className="container">
                <div className="columns">
                    <div className="column col-12">
                        <div className="content-subadvertisement shadow">

                            <div className="text">
                            <h2>{headlineOne}</h2>
                            <p>{dogInformation}</p>
                            </div>

                            <div className="text">
                            <h2>{headlineTwo}</h2>
                            <p>{userInformation}</p>
                            </div>

                            <div className="text">
                            <h2>{headlineThree}</h2>
                            <p>{adoptionProces}</p>
                            </div>

                            <div className="text">
                            <h2>{headlineFour}</h2>
                            <p>{adoptionFinancials}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AdvertisementLower;
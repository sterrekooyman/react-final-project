import './AdvertisementLower.css';

function AdvertisementLower({dogInformation}) {
    return (
        <article className="advertisement-lower">
            <div className="container ">
                <div className="columns">
                    <div className="column col-12">
                        <div className="content shadow">
                            <h2>Wat moet je over mij weten?</h2>
                            <p>{dogInformation}</p>
                            <h2>Jij bent...</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis
                                tortor, vel lacinia lorem.
                                Aliquam erat volutpat</p>
                            <h2>Het adoptieproces</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis
                                tortor, vel lacinia lorem.
                                Aliquam erat volutpat. </p>
                            <h2>Het adoptietarief</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis
                                tortor, vel lacinia lorem.
                                Aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AdvertisementLower;
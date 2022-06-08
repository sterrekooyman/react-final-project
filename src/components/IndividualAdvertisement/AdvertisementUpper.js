import './AdvertisementUpper.css';

function AdvertisementUpper({image, title, textOne, name, subtext}) {

    return(
        <article className="advertisement-upper">
            <div className="container">
                <div className="columns">
                    <div className="column col-6 col-md-12 col-sm-12">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="column col-6 col-md-12 col-sm-12">
                        <div className="content-advertisement shadow">
                            <h2>{name}</h2>
                            <p>{textOne}</p>
                            <p className="content-list">{subtext}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AdvertisementUpper;
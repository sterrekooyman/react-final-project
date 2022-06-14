import './Hero.css';
import headerIllustration from '../../assets/img/header/header-illustration.svg';


import {Button, ButtonGroup} from '../Button/Button';

function Hero() {

    return (
        <header className="hero">
            <div className="container">
                <div className="columns">
                    <div className="column col-6 col-lg-8 col-md-12">
                        <h1>Wij streven ernaar om alle honden een thuis te&nbsp;geven</h1>
                        <p>Wij vinden dat er teveel honden zijn zonder een liefdevol thuis.
                            Ons doel is daarom ook om zoveel mogelijk honden een fijne en welkome plek te geven.
                            Een thuis waar ze geaccepteerd en geliefd worden, precies zoals ze zijn.
                            Dit platform is opgericht om de stap in het vinden van jouw perfecte hondenmatch zo klein mogelijk te maken.
                        </p>
                        <ButtonGroup>
                            <Button url="/honden" variation="primary">Bekijk alle honden</Button>
                            <Button url="/log-in" variation="secondary">Inloggen</Button>
                        </ButtonGroup>
                    </div>

                    <div className="column col-12 illustration">
                        <img src={headerIllustration} alt="Hondje"/>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Hero;
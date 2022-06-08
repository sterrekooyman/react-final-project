import headerDog from '../../assets/img/header/header-dog.jpg';
import './Hero.css';

import {Button, ButtonGroup} from '../Button/Button';

function Hero() {

    return (
        <header className="home-header">
            <div className="container">
                <div className="columns">
                    <div className="column col-6 col-lg-7 col-sm-12">
                        <h1 className="headline-large">Wij streven ernaar om alle honden een thuis te geven</h1>
                        <p>Wij vinden dat er teveel honden zijn zonder een liefdevol thuis. Ons doel is om zoveel mogelijk honden een fijne en welkome plek te geven. Een thuis waar ze geaccepteerd en geliefd worden, precies zoals ze zijn. </p>
                        <ButtonGroup>
                            <Button url="/advertisements" variation="primary">Bekijk alle honden</Button>
                            <Button url="/log-in" variation="secondary">Inloggen</Button>
                        </ButtonGroup>
                    </div>
                    <div className="column col-6 col-lg-4 col-sm-12">
                        <img src={headerDog} alt="Hondje"/>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Hero;
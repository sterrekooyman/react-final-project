import headerDog from '../../assets/img/header-dog.jpg';
import './Header.css';

import {Button, ButtonGroup} from '../Button/Button';

function Header() {
    return (
        <header className="home-header">
            <div className="container">
                <div className="columns">
                    <div className="column col-6 col-lg-7 col-sm-12">
                        <h1 className="headline-large">Wij streven ernaar om alle honden een thuis te geven</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus expedita fugiat inventore ipsam laboriosam molestias nobis. Aspernatur, dolores, magnam.</p>
                        <ButtonGroup>
                            <Button url="#one" variation="primary">Bekijk alle honden</Button>
                            <Button url="#two" variation="secondary">Inloggen</Button>
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

export default Header;
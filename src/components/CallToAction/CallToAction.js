import {Button, ButtonGroup} from "../Button/Button";
import './CallToAction.css';

function CallToAction(){
    return(
        <section className="cta">
            <div className="container">
                <div className="columns">
                    <div className="col-12">
                        <h2 className="cta-h2 heading-2">Maak kennis met de honden</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, atque autem cum cupiditate eius est explicabo facere inventore ipsum labore perferendis provident quae quam quas qui recusandae sequi sit temporibus ut veritatis voluptas, voluptate! Animi dolorem doloribus eaque expedita iure, minima molestiae nisi non placeat quaerat quia ratione saepe?</p>
                        <ButtonGroup>
                            <Button url="/advertisements" variation="primary">Bekijk alle honden</Button>
                            <Button url="/log-in" variation="secondary">Inloggen</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
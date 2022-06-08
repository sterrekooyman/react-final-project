import './RedirectArea.css';
import {Button} from "../Button/Button";

function RedirectArea({text}) {
    return(
        <div className="redirect">
            <div className="container">
                <div className="columns">
                    <div className="column col-12">
                        <div className="redirect-content shadow">
                            <div className="redirect-phrase"><p>{text}</p></div>
                            <div className="redirect-button">
                            <Button url="/adoption" variation="redirect">Adopteer</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default RedirectArea;
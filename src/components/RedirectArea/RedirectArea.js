import {Button} from "../Button/Button";
import './RedirectArea.css';

function RedirectArea({text, buttonText, buttonUrl, buttonVariation}) {
    return(
        <div className="redirect">
            <div className="container">
                <div className="columns">
                    <div className="column col-12">
                        <div className="redirect-content shadow">
                            <p>{text}</p>
                            <Button url={buttonUrl} variation={buttonVariation}>{buttonText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RedirectArea;
import {Link} from 'react-router-dom'
import './Button.css';

export function ButtonGroup({children}) {
    return (
        <div className="button-group">
            {children}
        </div>
    );
}

export function Button({variation, url, size, children}) {

    return (
        <Link to={url} className={`button button-${variation} button-${size}`}>{children}</Link>
    );
}
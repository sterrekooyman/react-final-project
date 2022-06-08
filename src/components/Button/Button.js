import './Button.css';

export function ButtonGroup({children}) {
    return (
        <div className="button-group">
            {children}
        </div>
    );
}

export function Button({variation, url, children}) {

    return (
        <a href={url} className={`button button-${variation}`}>{children}</a>
    );
}
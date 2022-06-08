import './Article.css';


function Article({image, title, headline, text}) {

    return (
        <article className="home-article">
            <div className="container">
                <div className="columns">
                    <div className="column col-6 col-lg-12 ">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="column col-6 col-lg-12">
                        <div className="article-content shadow">
                            <h2 className="article-headline heading-2 underline">{headline}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Article;
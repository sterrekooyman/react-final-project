import Navigation from "../././components/Navigation/Navigation";
import Hero from ".././components/Hero/Hero";
import Article from ".././components/Article/Article";
import CallToAction from ".././components/CallToAction/CallToAction";
import Footer from ".././components/Footer/Footer";

import articleOne from '../assets/img/article/article-1.jpg';
import articleTwo from '../assets/img/article/article-2.jpg';

function HomePage() {
    return (
        <div className="App">
            <Navigation/>
            <Hero/>

            <Article
                image={articleOne}
                title="People walking dog"
                headline="Wie wij zijn"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem. Aliquam erat volutpat. Donec at pellentesque est. Vestibulum volutpat accumsan molestie. Fusce mauris enim, posuere in lacus nec, facilisis tincidunt sapien..."
            />

            <Article
                image={articleTwo}
                title="Sleeping dog"
                headline="Wat wij doen"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae iaculis tortor, vel lacinia lorem. Aliquam erat volutpat. Donec at pellentesque est. Vestibulum volutpat accumsan molestie. Fusce mauris enim, posuere in lacus nec, facilisis tincidunt sapien..."
            />

            <CallToAction/>
            <Footer/>

        </div>
    );
}

export default HomePage;
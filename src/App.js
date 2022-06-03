import './css/reset.css';
import './css/grid.css';
import './css/typography.css';
import './css/test.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Header/>
        </div>
    );
}

export default App;
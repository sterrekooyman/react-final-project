import {Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import OverviewAdvertisementsPage from './pages/OverviewAdvertisementsPage';
import IndividualAdvertisementPage from './pages/IndividualAdvertisementPage';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/advertisements" element={<OverviewAdvertisementsPage/>}/>
                <Route path="/advertisement" element={<IndividualAdvertisementPage/>}/>
            </Routes>
    );
}

export default App;
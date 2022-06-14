import { Route, Routes } from 'react-router-dom';

import './css/reset.css';
import './css/grid.css';
import './css/typography.css';
import './css/base.css';
import './css/form.css';

import HomePage from './pages/HomePage';
import OverviewAdvertisementsPage from './pages/OverviewAdvertisementsPage';
import IndividualAdvertisementPage from './pages/IndividualAdvertisementPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdoptionPage from './pages/AdoptionPage';
import PlaceAdvertisementPage from './pages/PlaceAdvertisementPage';
import {AuthProvider} from './Contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/honden" element={<OverviewAdvertisementsPage/>}/>
                <Route path="/honden/:dogId" element={<IndividualAdvertisementPage/>}/>
                <Route path="/plaats-advertentie" element={<PlaceAdvertisementPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/log-in" element={<LoginPage />}/>
                <Route path="/registreer" element={<RegisterPage/>}/>
                <Route path="/adopt" element={<AdoptionPage/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Footer from "./components/footer";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

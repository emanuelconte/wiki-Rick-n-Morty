import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/characters/:characterId" element={<CharacterDetails />} />
            </Routes>
        </Router>
    );
};

// A exportação padrão deve ser aqui
export default App;

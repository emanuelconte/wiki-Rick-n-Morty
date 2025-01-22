const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_BASE_URL = 'https://rickandmortyapi.com/api';

// Rota para listar personagens
router.get('/character', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const response = await axios.get(`${API_BASE_URL}/character?page=${page}`);
        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching characters:', error.message);
        res.status(500).json({ error: 'Error fetching characters.' });
    }
});

// Rota para buscar um personagem pelo ID
router.get('/character/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const character = characters.find(c => c.id === parseInt(id));
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }
        console.log(character)
        res.json(character);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching characters.' });
    }
});

module.exports = router;

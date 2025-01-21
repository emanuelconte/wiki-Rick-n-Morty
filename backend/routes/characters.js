const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_BASE_URL = 'https://rickandmortyapi.com/api';

// Rota para listar personagens
router.get('/character', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/character`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar personagens.' });
    }
});

// Rota para buscar um personagem pelo ID
router.get('/character/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const character = characters.find(c => c.id === parseInt(id));
        if (!character) {
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        console.log(character)
        res.json(character);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o personagem.' });
    }
});

module.exports = router;

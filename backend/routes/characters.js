const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_BASE_URL = 'https://rickandmortyapi.com/api';

// Rota para listar personagens
router.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/character`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar personagens.' });
    }
});

// Rota para buscar um personagem pelo ID
router.get('/characters/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${API_BASE_URL}/character/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o personagem.' });
    }
});

module.exports = router;

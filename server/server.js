const express = require('express');
const cors = require('cors');
const characterRoutes = require('./routes/characters');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', characterRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Rick and Morty API!');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const characterRoutes = require('./routes/characters');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', characterRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para lidar com requisições JSON

// Defina uma rota de teste
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Porta do servidor (pode ser definida no arquivo .env)
const PORT = process.env.PORT || 3001;

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

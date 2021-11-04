import express from 'express';
import routes from './routes/todoList.routes';

const app = express();
app.use(express.json());

// Adicionando app.use para todas as rotas do arquivo de rotas
app.use(routes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

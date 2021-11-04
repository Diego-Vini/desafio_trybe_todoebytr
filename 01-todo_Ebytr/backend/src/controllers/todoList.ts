import { Router } from 'express';

const todoListRouter = Router();

todoListRouter.post('/', async (req, res) => {
  return res.json({ message: 'Rota funcionando' });
});

export default todoListRouter;

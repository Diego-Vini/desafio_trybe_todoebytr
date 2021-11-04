import { Router } from 'express';
import todoListRouter from '../controllers/todoList';

const routes = Router();

// Toda a rota com todolist vai passar por essa rota
routes.use('/todolist', todoListRouter);

export default routes;

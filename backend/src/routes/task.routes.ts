import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const router = Router();
const controller = new TaskController();
const { getTasks, createTask, updateTask, deleteTask } = controller;

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;

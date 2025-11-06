import { Request, Response } from 'express';
import { TaskService } from '../services/task.services';
import { TaskFilters } from '../models/task.model';

export class TaskController {
    private service = new TaskService();

    getTasks = (req: Request, res: Response) => {
        const { completed, search } = req.query;


        const filters: TaskFilters = {};

        if (completed !== undefined) {
            filters.completed = completed === 'true';
        }
        
        if (typeof search === 'string') {
            filters.search = search;
        }

        const filteredTasks = this.service.getAll(filters);
        
        res.json(filteredTasks);
    };

    createTask = (req: Request, res: Response) => {
        const { title, description } = req.body;

        if (!title || !description)
            return res.status(400).json({ message: 'Title and description are required' });

        const newTask = this.service.create(title, description);
        
        res.status(201).json(newTask);
    };

    updateTask = (req: Request, res: Response) => {
        const updated = this. service.update(req.params.id, req.body);
        
        if (!updated) return res.status(404).json({ message: 'Task not found' });
        
        res.json(updated);
    };

    deleteTask = (req: Request, res: Response) => {
        const deleted = this.service.delete(req.params.id);
        
        if (!deleted) return res.status(404).json({ message: 'Task not found' });
        
        res.status(200).json({ message: 'Task deleted successfully' });
    };
}

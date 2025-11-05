import { Task } from '../models/task.model';

export class TaskService {
    private tasks: Task[] = [];

    getAll(): Task[] {
        return this.tasks;
    }

    create(title: string, description: string): Task {
        const newTask: Task = {
            id: String(Date.now()),
            title,
            description,
            completed: false,
            createdAt: new Date(),
        };

        this.tasks.push(newTask);
    
        return newTask;
    }

    update(id: string, data: Partial<Task>): Task | null {
        const task = this.tasks.find((t) => t.id === id);
    
        if (!task) return null;
        
        task.title = data.title ?? task.title;
        task.description = data.description ?? task.description;
        task.completed = data.completed ?? task.completed;
        
        return task;
    }

    delete(id: string): boolean {
        const index = this.tasks.findIndex((t) => t.id === id);

        if (index === -1) return false;
        
        this.tasks.splice(index, 1);
        
        return true;
    }
}

import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    })
);

app.use('/api/tasks', taskRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
});

export default app;

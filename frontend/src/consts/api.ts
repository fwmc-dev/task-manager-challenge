const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const API = {
    TASKS: `${API_URL}/api/tasks`,
}
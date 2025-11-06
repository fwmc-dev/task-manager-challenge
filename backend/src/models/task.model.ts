export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}

export interface TaskFilters {
    completed?: boolean;
    search?: string;
}
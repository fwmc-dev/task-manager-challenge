import { TaskData } from '@/types/task.types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: TaskData[];
  onDeleteTask: (id: string) => void;
  onEditTask: (task: TaskData) => void;
  onUpdateState: (task: TaskData) => void;
}

export default function TaskList({ tasks, onDeleteTask, onEditTask, onUpdateState }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-8">
        No hay tareas para mostrar.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:p-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
          onUpdate={onUpdateState}
        />
      ))}
    </div>
  );
};

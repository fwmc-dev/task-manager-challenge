import { TaskData } from '@/types/task.types';
import StatusPill from './StatusPill';

interface TaskItemProps {
  task: TaskData;
  onDelete: (id: string) => void;
  onEdit: (task: TaskData) => void;
  onUpdate: (task: TaskData) => void;
}

export default function TaskItem({ task, onDelete, onEdit, onUpdate }: TaskItemProps) {
  const taskDate = new Date(task.createdAt);
  const formattedDate = taskDate.toLocaleDateString('es-ES');

  return (
    <div
      className={`p-5 rounded-lg shadow-lg border transition duration-150 flex flex-col h-full bg-gray-800 border-gray-700`}
    >
      <div className="flex items-start justify-between">
        <h2 className={`text-xl font-semibold mb-2 pr-4 ${task.completed ? 'line-through text-gray-400' : 'text-white'} wrap-break-word`}>
          {task.title}
        </h2>
        <div className="ml-4 shrink-0">
          <StatusPill task={task} update={onUpdate} />
        </div>
      </div>

      <p className="text-gray-300 mb-4 grow wrap-break-word overflow-hidden">
          {task.description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
            <span>{formattedDate}</span>
        </div>
        
        <div className="flex space-x-3 ml-4">
            <button
                onClick={() => onEdit(task)}
                className="text-gray-400 hover:cursor-pointer hover:text-blue-400 transition duration-150"
                title="Editar tarea"
            >
                Editar
            </button>
            <button
                onClick={() => onDelete(task.id)}
                className="text-gray-400 hover:cursor-pointer hover:text-red-500 transition duration-150"
                title="Eliminar tarea"
            >
                Eliminar
            </button>
        </div>
      </div>
    </div>
  );
}

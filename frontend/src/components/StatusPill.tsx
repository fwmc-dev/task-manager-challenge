import { TaskData } from '@/types/task.types';

interface StatusPillProps {
  task: TaskData;
  update: (task: TaskData) => void;
}

export default function StatusPill({ task, update }: StatusPillProps) {
  const { completed } = task;
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium hover:cursor-pointer hover:text-white transition duration-150';

  const statusStyles = completed
    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';

  const text = completed ? 'Completado' : 'Pendiente';

  const classes = `${baseStyles} ${statusStyles}`;

  return (
    <button onClick={() => update(task)} className={classes}>
        <span>
            {text}
        </span>
    </button>
  );
};

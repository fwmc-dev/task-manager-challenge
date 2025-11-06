import React, { useState } from 'react';
import { TaskData } from '@/types/task.types';

interface TaskFormProps {
  onClose: () => void;
  currentTask?: TaskData | null; 
  onSubmit: (data: { title: string; description: string }, id?: string) => void;
}

export default function TaskForm({ onClose, onSubmit, currentTask }: TaskFormProps) {
  const [title, setTitle] = useState(currentTask?.title || '');
  const [description, setDescription] = useState(currentTask?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    onSubmit({ title, description }, currentTask?.id);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Título*</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">Descripción*</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="hover:cursor-pointer px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition duration-150">
          Cancelar
        </button>
        <button
          type="submit"
          className="hover:cursor-pointer rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 transition duration-150"
          disabled={!title}
        >
          {currentTask ? 'Actualizar Tarea' : 'Guardar Tarea'}
        </button>
      </div>
    </form>
  );
};

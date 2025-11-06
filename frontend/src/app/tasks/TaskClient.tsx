"use client"

import { useState, useCallback } from 'react';
import TaskList from "@/components/TaskList";
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import Alert from "@/components/Alert";
import { TaskData } from "@/types/task.types";
import updateTask from "@/actions/updateTask";
import deleteTask from "@/actions/deleteTask";
import createTask from '@/actions/createTask';

interface TaskClientProps {
    initialTasks: TaskData[];
    errorMessage: string | null;
}

interface ClientAlert {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}

export default function TaskClient({ initialTasks, errorMessage }: TaskClientProps) {
    const [tasks, setTasks] = useState<TaskData[]>(() => initialTasks);
    const [clientAlert, setClientAlert] = useState<ClientAlert | null>(errorMessage ? { id: 1, message: errorMessage, type: 'error' } : null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState<TaskData | null>(null);

    const showAlert = useCallback((message: string, type: ClientAlert['type']) => {
        setClientAlert({ id: Date.now(), message, type });
    }, []);

    const handleCloseAlert = useCallback(() => {
        setClientAlert(null);
    }, []);

    

    const openCreateModal = () => {
        setEditingTask(null);
        setIsModalOpen(true);
    };

    const handleUpdateTaskState = async (task: TaskData) => {
        const updatedPayload = { ...task, completed: !task.completed };

        try {
            const updatedTask = await updateTask({ id: task.id, payload: updatedPayload });
        
            setTasks(prevTasks => 
                prevTasks.map(t => t.id === task.id ? updatedTask : t)
            );
            showAlert('Estado de tarea actualizado con éxito.', 'success');
        } catch (error) {
            console.error("No se pudo actualizar la UI: ", error);
            showAlert('No se pudo actualizar el estado de la tarea.', 'error');
        }
    };

    const handleEditTask = (task: TaskData) => {
        setEditingTask(task);
        setIsModalOpen(true);
    };

    const handleDeleteTask = async (id: string) => {
        try {
            await deleteTask({ id });
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
            showAlert('Tarea eliminada con éxito.', 'success');
        } catch (error) {
            console.error("No se pudo actualizar la UI: ", error);
            showAlert('No se pudo eliminar la tarea.', 'error');
        }
    };

    const handleSubmitForm = async (
        formData: { title: string; description: string }, 
        id?: string
    ) => {
        if (id) {
            try {
                const updatedTask = await updateTask({ id, payload: formData });
                setTasks(prevTasks => 
                    prevTasks.map(t => t.id === id ? updatedTask : t)
                );
                showAlert('Tarea editada con éxito.', 'success');
            } catch (error) {
                console.error("No se pudo actualizar la UI: ", error);
                showAlert('No se pudo editar la tarea.', 'error');
            }
        } else {
            try {
                const newTask = await createTask({ payload: formData });
                setTasks(prevTasks => [...prevTasks, newTask]);
                showAlert('Tarea creada con éxito.', 'success');
            } catch (error) {
                console.error("No se pudo actualizar la UI: ", error);
                showAlert('No se pudo crear la tarea.', 'error');
            }
        }
        
        setEditingTask(null); 
        setIsModalOpen(false);
    };

    return (
        <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-start py-8">
            {clientAlert && (
                <Alert
                    key={clientAlert.id}
                    message={clientAlert.message}
                    type={clientAlert.type}
                    onClose={handleCloseAlert}
                />
            )}
            <section className="px-6 lg:px-8 w-full max-w-7xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold text-white">Mis Tareas</h1>
                    <button
                        onClick={openCreateModal}
                        className="hover:cursor-pointer rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        + Nueva Tarea
                    </button>
                </div>
            </section>
            <section className="mt-4 w-full max-w-7xl px-6 lg:px-8">
                <TaskList 
                    tasks={tasks}
                    onDeleteTask={handleDeleteTask}
                    onEditTask={handleEditTask}
                    onUpdateState={handleUpdateTaskState}
                />
            </section>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingTask(null);
                }} 
                
                title={editingTask ? "Editar Tarea" : "Crear Nueva Tarea"}
            >
                <TaskForm 
                    onClose={() => {
                        setIsModalOpen(false);
                        setEditingTask(null);
                    }} 
                    onSubmit={handleSubmitForm} 
                    currentTask={editingTask}
                />
            </Modal>
        </main>
    )
}

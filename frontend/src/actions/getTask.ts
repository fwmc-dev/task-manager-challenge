"use server"

import { TaskData } from "@/types/task.types";
import { fetchApi } from "@/common/my-fetch";
import { API } from "@/consts/api";

export default async function getTasks(query: string = '') {
    let tasks: TaskData[] = [];
    let errorMessage: string | null = null;

    try {
        tasks = await fetchApi<TaskData[]>(`${API.TASKS}?search=${encodeURIComponent(query)}`, {
            method: "GET",
            cache: 'no-store',
        });
        
        console.log(tasks);

    } catch (error) {
        console.error("No se pudieron cargar las tareas:", error);
        errorMessage = "Hubo un error al cargar las tareas. Intente nuevamente más tarde.";
    }

    return { tasks, errorMessage };
}

// app/tasks/page.tsx (o app/tasks/layout.tsx, dependiendo de tu estructura)
"use server"

import { TaskData } from "@/types/task.types";
import { fetchApi } from "@/common/my-fetch";
import { API } from "@/consts/api";
import TaskClient from "./TaskClient";

export default async function Tasks() {
    let tasks: TaskData[] = [];
    let errorMessage: string | null = null;

    try {
        tasks = await fetchApi<TaskData[]>(API.TASKS, {
            method: "GET",
            cache: 'no-store',
        });
        
        console.log(tasks);

    } catch (error) {
        console.error("No se pudieron cargar las tareas:", error);
        errorMessage = "Hubo un error al cargar las tareas. Intente nuevamente más tarde.";
    }

    return <TaskClient initialTasks={tasks} errorMessage={errorMessage} />;
}

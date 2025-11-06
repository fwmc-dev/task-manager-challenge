"use server"

import { API } from "@/consts/api";
import { fetchApi } from "@/common/my-fetch";
import { TaskData } from "@/types/task.types";

interface updateTaskProps {
    id: string;
    payload: Partial<TaskData>;
}

export default async function updateTask({ id, payload }: updateTaskProps): Promise<TaskData> {

    try {
        const data = await fetchApi<TaskData>(`${API.TASKS}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        
        console.log(data);

        return data;
    } catch (error) {
        console.error("No se pudo editar la tarea: ", error);
        throw new Error("No se pudo editar la tarea");
    }
}
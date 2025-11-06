"use server"

import { API } from "@/consts/api";
import { fetchApi } from "@/common/my-fetch";
import { TaskData } from "@/types/task.types";

interface createTaskProps {
    payload: Partial<TaskData>;
}

export default async function createTask({ payload }: createTaskProps): Promise<TaskData> {

    try {
        const data = await fetchApi<TaskData>(API.TASKS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        
        console.log(data);

        return data;
    } catch (error) {
        console.error("No se pudo crear la tarea: ", error);
        throw new Error("No se pudo crear la tarea");
    }
}
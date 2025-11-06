"use server"

import { API } from "@/consts/api";
import { fetchApi } from "@/common/my-fetch";
import { ResponseData } from "@/types/response.types";

interface deleteTaskProps {
    id: string;
}

export default async function deleteTask({ id }: deleteTaskProps) {
    try {
        await fetchApi<ResponseData>(`${API.TASKS}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error("No se puedo eliminar la tarea:", error);
        throw new Error("No se puedo eliminar la tarea");
    }
}
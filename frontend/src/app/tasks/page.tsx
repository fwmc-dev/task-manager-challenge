"use server"

import getTask from "@/actions/getTask";
import TaskClient from "./TaskClient";

export default async function Tasks() {
    const { tasks, errorMessage } = await getTask();

    return <TaskClient initialTasks={tasks} errorMessage={errorMessage} />;
}

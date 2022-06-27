import { Header } from "../components/Header/Header";
import { Tasks } from "../components/Tasks/Tasks";
import { ConfirmDeleteTask } from "../components/ConfirmDeleteTask/ConfirmDeleteTask";
import { useState } from "react";

export const TasksView = () => {
  const [taskIdToDelete, settaskIdToDelete] = useState("rekreacja");

  const grandGrandGrandFather = (value: string) => {
    settaskIdToDelete(value);
  };

  return (
    <>
      <Header />
      <Tasks grandGrandGrandFather={grandGrandGrandFather} />
      <ConfirmDeleteTask taskId={taskIdToDelete} />
    </>
  );
};

import { Header } from "../components/Header/Header";
import { Tasks } from "../components/Tasks/Tasks";
import { ConfirmDeleteTask } from "../components/ConfirmDeleteTask/ConfirmDeleteTask";
import { useState } from "react";

export const TasksView = () => {
  const [taskIdToDelete, setTaskIdToDelete] = useState("");

  const grandGrandGrandFather = (value: string) => {
    setTaskIdToDelete(value);
  };

  return (
    <>
      <Header />
      <Tasks grandGrandGrandFather={grandGrandGrandFather} />
      <ConfirmDeleteTask taskId={taskIdToDelete} />
    </>
  );
};

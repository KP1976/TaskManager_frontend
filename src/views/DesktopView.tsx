import { useContext } from "react";
import { TaskDetailsContext } from "../context/TaskDetailsContext";
import { TaskDetails } from "../components/TaskDetails/TaskDetails";

export const DesktopView = () => {
  const { taskDetails } = useContext(TaskDetailsContext);
  return <TaskDetails {...taskDetails} />;
};

import { MouseEvent, useContext } from "react";
import { AddTaskAndMobileMenuContext } from "../../../../../context/AddTaskAndMobileMenuContext";
import { ModifyTaskContext } from "../../../../../context/ModifyTaskContext";
import { TasksContext } from "../../../../../context/TasksContext";
import { SingleTask } from "../../../../../interfaces/TaskInterface";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";
import { apiUrl } from "../../../../../config/api";

import "./Icons.css";

interface Props {
  taskId: string;
  title: string;
  parent: (value: string) => void;
}

export const Icons = ({ parent, taskId, title }: Props) => {
  const { addTaskIsOpen, setAddTaskIsOpen, setIsModifyTask } = useContext(
    AddTaskAndMobileMenuContext
  );
  const { setModifyTask } = useContext(ModifyTaskContext);
  const { tasks, setTasks } = useContext(TasksContext);

  const makeTaskDone = (e: MouseEvent<HTMLButtonElement>) => {
    const task = e.currentTarget.parentElement?.parentElement;

    void (async () => {
      try {
        const response = await fetch(`${apiUrl}/tasks/${taskId}/1`, {
          method: "PATCH",
          body: JSON.stringify({
            id: taskId,
            isDone: 1,
          }),
        });
        const data = (await response.json()) as SingleTask;
        task?.classList.add("fade");

        const newTasks = tasks.map((x) =>
          x.id === data.id ? { ...x, isDone: 1 } : x
        );

        setTimeout(() => {
          setTasks(newTasks);
        }, 500);
      } catch (err) {
        getErrorMessage(err);
      }
    })();
  };

  const modifyTask = () => {
    setAddTaskIsOpen(!addTaskIsOpen);
    setIsModifyTask(true);
    setModifyTask({ id: taskId, title });
  };

  const deleteTask = (e: MouseEvent<HTMLButtonElement>) => {
    const confirmDeleteModal =
      e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement
        ?.nextElementSibling;

    parent(taskId);

    confirmDeleteModal?.classList.add("isVisible");
  };

  return (
    <div className="Task__icons">
      <button
        onClick={(e) => makeTaskDone(e)}
        aria-label="Make task done button"
      >
        <svg
          className="icon"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6D9AB1"
            d="M11.7482 0.67151C12.083 1.10425 12.083 1.80356 11.7482 2.2363L4.89107 11.0988C4.55625 11.5315 4.01518 11.5315 3.68036 11.0988L0.251036 6.66755C-0.0836786 6.23481 -0.0836786 5.5355 0.251036 5.10276C0.585804 4.67002 1.12848 4.67002 1.4633 5.10276L4.26161 8.74816L10.5375 0.67151C10.8723 0.238078 11.4134 0.238078 11.7482 0.67151Z"
          />
        </svg>
      </button>
      <button onClick={modifyTask} aria-label="Modify task button">
        <svg
          className="icon"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_706_598)">
            <path
              d="M2.56544 5.71968L5.71966 2.56593L4.68559 1.53187L3.23997 2.97749C3.22273 2.99476 3.20225 3.00847 3.17971 3.01782C3.15717 3.02717 3.133 3.03198 3.1086 3.03198C3.0842 3.03198 3.06003 3.02717 3.03749 3.01782C3.01495 3.00847 2.99447 2.99476 2.97723 2.97749L2.7145 2.71476C2.64184 2.6421 2.64184 2.52444 2.7145 2.45202L4.16012 1.0064L3.37169 0.217725C3.0813 -0.0726661 2.61067 -0.0726661 2.32028 0.217725L0.2177 2.3203C-0.0724559 2.61069 -0.0726903 3.08132 0.2177 3.37171L2.56544 5.71968ZM11.6702 2.98218C12.1099 2.54249 12.1097 1.82976 11.6702 1.39007L10.6097 0.329522C10.17 -0.110166 9.457 -0.110166 9.01708 0.329522L7.93849 1.40788L10.5916 4.06101L11.6702 2.98218ZM7.40809 1.93851L0.447154 8.89851L0.00746599 11.4166C-0.0518309 11.7562 0.24395 12.052 0.583794 11.9923L3.10216 11.5507L10.0612 4.5914L7.40809 1.93851ZM11.7822 8.62828L10.9938 7.83984L9.54817 9.28546C9.47552 9.35812 9.35786 9.35812 9.28544 9.28546L9.02271 9.02273C8.95028 8.95007 8.95028 8.83242 9.02271 8.76L10.4683 7.31437L9.4338 6.27984L6.27958 9.43359L8.62825 11.782C8.91864 12.0724 9.38927 12.0724 9.67966 11.782L11.7822 9.67968C12.0726 9.38929 12.0726 8.91867 11.7822 8.62828Z"
              fill="#6D9AB1"
            />
          </g>
          <rect
            width="3"
            height="12"
            transform="translate(4)"
            fill="#6D9AB1"
            fillOpacity="0.01"
          />
          <defs>
            <clipPath id="clip0_706_598">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button onClick={deleteTask} aria-label="Delete task button">
        <svg
          className="icon"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.27455 6L11.686 2.58852C12.1047 2.16989 12.1047 1.49114 11.686 1.07216L10.9278 0.313977C10.5092 -0.104659 9.83045 -0.104659 9.41148 0.313977L6 3.72545L2.58852 0.313977C2.16989 -0.104659 1.49114 -0.104659 1.07216 0.313977L0.313977 1.07216C-0.104659 1.4908 -0.104659 2.16954 0.313977 2.58852L3.72545 6L0.313977 9.41148C-0.104659 9.83011 -0.104659 10.5089 0.313977 10.9278L1.07216 11.686C1.4908 12.1047 2.16989 12.1047 2.58852 11.686L6 8.27454L9.41148 11.686C9.83011 12.1047 10.5092 12.1047 10.9278 11.686L11.686 10.9278C12.1047 10.5092 12.1047 9.83045 11.686 9.41148L8.27455 6Z"
            fill="#6D9AB1"
          />
        </svg>
      </button>
    </div>
  );
};

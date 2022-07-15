import React, { useContext } from "react";
import { AddTaskForm } from "./AddTaskForm/AddTaskForm";
import { AddTaskAndMobileMenuContext } from "../../context/AddTaskAndMobileMenuContext";

import "./AddTask.css";

interface Props {
  isOpen: boolean;
}

export const AddTask = ({ isOpen }: Props) => {
  const { setAddTaskIsOpen, isModifyTask, setIsModifyTask } = useContext(
    AddTaskAndMobileMenuContext
  );

  const handleClick = () => {
    setAddTaskIsOpen(false);
    setIsModifyTask(false);
  };

  return (
    <div className={isOpen ? "AddTask show" : "AddTask"}>
      <button
        className="AddTask__back-icon"
        onClick={handleClick}
        aria-label="Back to main page button"
      >
        <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_21_72)">
            <path
              d="M7.81696 13.9093L7.14303 14.6031C6.85767 14.8968 6.39624 14.8968 6.11392 14.6031L0.212492 8.5312C-0.0728652 8.23745 -0.0728652 7.76245 0.212492 7.47183L6.11392 1.39683C6.39928 1.10308 6.86071 1.10308 7.14303 1.39683L7.81696 2.09058C8.10535 2.38745 8.09928 2.87183 7.80481 3.16245L4.14678 6.74995H12.8714C13.2752 6.74995 13.6 7.08433 13.6 7.49995V8.49995C13.6 8.91558 13.2752 9.24995 12.8714 9.24995H4.14678L7.80481 12.8375C8.10231 13.1281 8.10838 13.6125 7.81696 13.9093Z"
              fill="#6C99B2"
            />
          </g>
          <defs>
            <clipPath id="clip0_21_72">
              <rect width="13.6" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <h2 className="AddTask__title">
        {isModifyTask ? "modyfikuj zadanie" : "dodaj nowe zadanie"}
      </h2>
      <h2 className="AddTask__title-desktop">nowe zadanie</h2>
      <AddTaskForm isModifyTask={isModifyTask} />
    </div>
  );
};

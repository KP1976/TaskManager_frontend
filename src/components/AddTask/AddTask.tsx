import { AddTaskForm } from "./AddTaskForm/AddTaskForm";
import { AddTaskCategoryIcon } from "./AddTaskForm/AddTaskCategoryIcon/AddTaskCategoryIcon";

import "./AddTask.css";

export const AddTask = () => (
  <div className="AddTask">
    <svg
      className="AddTask__back-icon"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <h2 className="AddTask__title">dodaj nowe zdanie</h2>
    <AddTaskCategoryIcon category={"technologia"} />
    <AddTaskForm />
  </div>
);

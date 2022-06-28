import { AddTaskFormCategories } from "./AddTaskFormCategories/AddTaskFormCategories";

import "./AddTaskForm.css";

interface Props {
  grandFather: (value: string) => void;
  isModifyTask: boolean;
}

export const AddTaskForm = ({ grandFather, isModifyTask }: Props) => {
  const parent = (value: string) => {
    grandFather(value);
  };

  return (
    <form className="AddTaskForm">
      <AddTaskFormCategories parent={parent} />

      <label className="AddTaskForm__label" htmlFor="task-title">
        Nazwa zadania
        <input
          className="AddTaskForm__title-input"
          id="task-title"
          type="text"
        />
      </label>

      <button className="AddTaskForm__submit-button">
        {isModifyTask ? "modyfikuj zadanie" : "dodaj zadanie"}
      </button>
    </form>
  );
};

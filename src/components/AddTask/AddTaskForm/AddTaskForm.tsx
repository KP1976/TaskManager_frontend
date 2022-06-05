import { AddTaskFormCategories } from "./AddTaskFormCategories/AddTaskFormCategories";

import "./AddTaskForm.css";

interface Props {
  grandFather: (value: string) => void;
}

export const AddTaskForm = ({ grandFather }: Props) => {
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

      <button className="AddTaskForm__submit-button">dodaj zadanie</button>
    </form>
  );
};

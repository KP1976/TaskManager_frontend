import {AddTaskFormCategories} from "./AddTaskFormCategories/AddTaskFormCategories";

import "./AddTaskForm.css";

export const AddTaskForm = () => (
  <form className="AddTaskForm">
    <AddTaskFormCategories/>

    <label className="AddTaskForm__label" htmlFor="task-title">
      Nazwa zadania
      <input className="AddTaskForm__title-input" id="task-title" type="text"/>
    </label>

    <button className="AddTaskForm__submit-button">dodaj zadanie</button>
  </form>
);

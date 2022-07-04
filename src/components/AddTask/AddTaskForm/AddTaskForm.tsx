import { ChangeEvent, useState } from "react";
import { AddTaskFormCategories } from "./AddTaskFormCategories/AddTaskFormCategories";
import { SingleTask } from "../../../interfaces/TaskInterface";

import "./AddTaskForm.css";

interface Props {
  grandFather: (value: string) => void;
  isModifyTask: boolean;
}

export const AddTaskForm = ({ grandFather, isModifyTask }: Props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("rekreacja");

  const parent = (value: string) => {
    grandFather(value);
    setTaskCategory(value);
  };

  const getTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const addTask = () => {
    const newTask = {
      title: taskTitle,
      category: taskCategory,
    };

    void (async () => {
      try {
        const response = await fetch("http://localhost:3001/api/tasks", {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTask),
        });

        const task = (await response.json()) as SingleTask;
        console.log(task);
      } catch (err) {
        console.log({ err });
      }
    })();
  };

  return (
    <form className="AddTaskForm" onSubmit={addTask}>
      <AddTaskFormCategories parent={parent} />

      <label className="AddTaskForm__label" htmlFor="task-title">
        Nazwa zadania
        <input
          className="AddTaskForm__title-input"
          id="task-title"
          type="text"
          onChange={getTaskTitle}
          required
          minLength={3}
          maxLength={25}
        />
      </label>

      <button type="submit" className="AddTaskForm__submit-button">
        {isModifyTask ? "modyfikuj zadanie" : "dodaj zadanie"}
      </button>
    </form>
  );
};

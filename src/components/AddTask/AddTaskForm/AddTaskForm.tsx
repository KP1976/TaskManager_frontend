import React, { ChangeEvent, useContext, useState } from "react";
import { AddTaskFormCategories } from "./AddTaskFormCategories/AddTaskFormCategories";
import { SingleTask } from "../../../interfaces/TaskInterface";
import { ModifyTaskContext } from "../../../context/ModifyTaskContext";
import { AddTaskCategoryIcon } from "./AddTaskCategoryIcon/AddTaskCategoryIcon";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { apiUrl } from "../../../config/api";

import "./AddTaskForm.css";

interface Props {
  isModifyTask: boolean;
}

export const AddTaskForm = ({ isModifyTask }: Props) => {
  const { modifyTask } = useContext(ModifyTaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("rekreacja");

  const parent = (value: string) => {
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
        const response = await fetch(`${apiUrl}/tasks`, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTask),
        });

        const task = (await response.json()) as SingleTask;
        console.log(task);
      } catch (err) {
        getErrorMessage(err);
      }
    })();
  };

  const handleModifyTask = (id: string) => {
    setTaskTitle(modifyTask.title);

    void (async () => {
      try {
        const response = await fetch(`${apiUrl}/tasks/${id}`, {
          method: "PATCH",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: taskTitle,
            category: taskCategory,
          }),
        });

        const task = (await response.json()) as SingleTask;
        console.log(task);
      } catch (err) {
        getErrorMessage(err);
      }
    })();
  };

  return (
    <form
      className="AddTaskForm"
      onSubmit={!isModifyTask ? addTask : () => handleModifyTask(modifyTask.id)}
    >
      <AddTaskCategoryIcon category={taskCategory} />
      <p className="AddTaskForm__categories-title">Typ zadania</p>
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

      <button
        type="submit"
        className="AddTaskForm__submit-button"
        aria-label="Submit add task button"
      >
        {isModifyTask ? (
          <span>modyfikuj zadanie</span>
        ) : (
          <span>dodaj zadanie</span>
        )}
      </button>
    </form>
  );
};

import "./AddTaskButton.css";

interface Props {
  showAddTask: () => void;
}

export const AddTaskButton = ({ showAddTask }: Props) => {
  return (
    <button className="Tasks__add-task-button" onClick={showAddTask}>
      +
    </button>
  );
};

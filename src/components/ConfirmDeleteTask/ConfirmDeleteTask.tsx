import "./ConfirmDeleteTask.css";
import { useRef } from "react";

interface Props {
  taskId: string;
}

export const ConfirmDeleteTask = ({ taskId }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const clickNo = () => {
    modalRef.current?.classList.remove("isVisible");
  };

  const clickYes = () => {
    void (async () => {
      try {
        await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
          method: "DELETE",
        });
        location.reload();
      } catch (err) {
        console.log({ err });
      }
    })();
    modalRef.current?.classList.remove("isVisible");
  };

  return (
    <div ref={modalRef} className="ConfirmDeleteTask">
      <h2 className="ConfirmDeleteTask__question">
        na pewno skasować to zadanie?
      </h2>
      <div className="ConfirmDeleteTask__buttons-wrapper">
        <button className="ConfirmDeleteTask__button" onClick={clickYes}>
          Tak
        </button>
        <button className="ConfirmDeleteTask__button" onClick={clickNo}>
          Nie
        </button>
      </div>
    </div>
  );
};

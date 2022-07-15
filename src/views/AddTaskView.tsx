import { AddTask } from "../components/AddTask/AddTask";

interface Props {
  open: boolean;
}

export const AddTaskView = ({ open }: Props) => {
  return <AddTask isOpen={open} />;
};
